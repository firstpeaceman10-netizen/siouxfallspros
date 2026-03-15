// api/webhook.js
// POST /api/webhook
// Stripe calls this when payment events happen
// This is where money actually gets processed and listings go live

const stripe   = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { createClient } = require('@supabase/supabase-js');
const nodemailer = require('nodemailer');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

// Email setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).end();

  const sig = req.headers['stripe-signature'];
  let event;

  try {
    const rawBody = await getRawBody(req);
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error('Webhook signature error:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  console.log(`📨 Stripe webhook: ${event.type}`);

  try {
    switch (event.type) {

      case 'checkout.session.completed': {
        const session  = event.data.object;
        const meta     = session.metadata || {};
        const spotType = meta.spotType;
        const catKey   = meta.categoryKey;

        // Check spot still available
        const { data: spotData } = await supabase
          .from('spots').select('*')
          .eq('category_key', catKey)
          .eq('spot_type', spotType)
          .single();

        if (spotData && spotData.taken_spots >= spotData.max_spots) {
          // Full — refund
          if (session.payment_intent) {
            await stripe.refunds.create({ payment_intent: session.payment_intent });
          }
          console.log(`⚠️ Spots full for ${catKey}/${spotType} — refunded`);
          break;
        }

        // Increment spot count
        if (spotData) {
          await supabase.from('spots')
            .update({ taken_spots: spotData.taken_spots + 1 })
            .eq('id', spotData.id);
        }

        // Activate business listing
        const { data: business } = await supabase
          .from('businesses')
          .update({
            status: 'active',
            featured: spotType === 'spotlight' || spotType === 'page1',
            stripe_customer_id: session.customer,
            stripe_subscription_id: session.subscription,
            approved_at: new Date().toISOString(),
          })
          .eq('stripe_customer_id', session.customer)
          .eq('status', 'pending')
          .select().single();

        if (business) {
          // Email you
          await sendYouEmail(business, spotType);
          // Email the business
          await sendBusinessEmail(business, spotType);
        }

        console.log(`✅ Listing live: ${meta.businessName}`);
        break;
      }

      case 'customer.subscription.deleted': {
        const sub        = event.data.object;
        const customerId = sub.customer;

        const { data: business } = await supabase
          .from('businesses').select('*')
          .eq('stripe_customer_id', customerId).single();

        if (business) {
          // Downgrade to free
          await supabase.from('businesses')
            .update({ featured: false, spot_type: 'free', monthly_amount: 0, stripe_subscription_id: '' })
            .eq('stripe_customer_id', customerId);

          // Free the spot
          const { data: spotData } = await supabase
            .from('spots').select('*')
            .eq('category_key', business.category_key)
            .eq('spot_type', business.spot_type).single();

          if (spotData && spotData.taken_spots > 0) {
            await supabase.from('spots')
              .update({ taken_spots: spotData.taken_spots - 1 })
              .eq('id', spotData.id);
          }

          // Notify waitlist
          const { data: waitlist } = await supabase
            .from('waitlist').select('*')
            .eq('category_key', business.category_key)
            .eq('spot_type', business.spot_type)
            .order('created_at', { ascending: true }).limit(1);

          if (waitlist && waitlist.length > 0) {
            await sendWaitlistEmail(waitlist[0], business.category_key, business.spot_type);
            await supabase.from('waitlist').delete().eq('id', waitlist[0].id);
          }
        }
        break;
      }

      case 'invoice.payment_failed': {
        console.log(`⚠️ Payment failed for customer ${event.data.object.customer}`);
        break;
      }
    }
  } catch (err) {
    console.error('Webhook handler error:', err);
  }

  res.json({ received: true });
};

// ── Get raw body for Stripe signature verification ────────────────
function getRawBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', chunk => data += chunk);
    req.on('end', () => resolve(Buffer.from(data)));
    req.on('error', reject);
  });
}

// ── Email helpers ─────────────────────────────────────────────────
async function sendYouEmail(business, spotType) {
  const amount = business.monthly_amount;
  try {
    await transporter.sendMail({
      from: `SiouxFallsPros <${process.env.GMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `💰 New Payment — ${business.name} ($${amount}/month)`,
      html: `
        <div style="font-family:sans-serif;max-width:500px;padding:24px">
          <h2 style="color:#1a5f9e">💰 New Payment Received</h2>
          <p><strong>Business:</strong> ${business.name}</p>
          <p><strong>Category:</strong> ${business.category_key}</p>
          <p><strong>Spot:</strong> ${spotType}</p>
          <p><strong>Amount:</strong> <span style="color:#2e7d32;font-size:18px;font-weight:700">$${amount}/month</span></p>
          <p><strong>Phone:</strong> ${business.phone}</p>
          <p><strong>Email:</strong> ${business.email}</p>
          <p style="margin-top:20px">✅ Listing is now live on the site automatically.</p>
          <a href="${process.env.SITE_URL}/admin" style="display:inline-block;margin-top:16px;padding:12px 24px;background:#1a5f9e;color:white;border-radius:50px;text-decoration:none;font-weight:700">Open Admin Panel</a>
        </div>`,
    });
  } catch (err) { console.error('Email error:', err.message); }
}

async function sendBusinessEmail(business, spotType) {
  const names = { spotlight:'Premium Category Spotlight', page1:'Page 1 Featured', page2:'Page 2 Listing', free:'Free Listing' };
  try {
    await transporter.sendMail({
      from: `SiouxFallsPros <${process.env.GMAIL_USER}>`,
      to: business.email,
      subject: `Welcome to SiouxFallsPros — ${business.name} is now live!`,
      html: `
        <div style="font-family:sans-serif;max-width:500px;padding:24px">
          <h2 style="color:#c8773a">Welcome to SiouxFallsPros! 🎉</h2>
          <p>Hi ${business.owner_name || business.name},</p>
          <p>Your listing is now live on <a href="${process.env.SITE_URL}">SiouxFallsPros.com</a> — Sioux Falls' local business directory.</p>
          <p><strong>Listing Type:</strong> ${names[spotType] || spotType}</p>
          <p><strong>Monthly Amount:</strong> $${business.monthly_amount}/month — billed automatically</p>
          <p>Customers searching for ${business.category_key} services in Sioux Falls can now find and call you directly from the site.</p>
          <p>Questions? Reply to this email anytime.</p>
          <p>Welcome to the family,<br/><strong>SiouxFallsPros Team</strong></p>
          <a href="${process.env.SITE_URL}" style="display:inline-block;margin-top:16px;padding:12px 24px;background:#c8773a;color:white;border-radius:50px;text-decoration:none;font-weight:700">View SiouxFallsPros.com</a>
        </div>`,
    });
  } catch (err) { console.error('Business email error:', err.message); }
}

async function sendWaitlistEmail(entry, category, spotType) {
  try {
    await transporter.sendMail({
      from: `SiouxFallsPros <${process.env.GMAIL_USER}>`,
      to: entry.email,
      subject: `⭐ A spot opened in ${category} on SiouxFallsPros`,
      html: `
        <div style="font-family:sans-serif;max-width:500px;padding:24px">
          <h2 style="color:#c8773a">⭐ Good News — A Spot Opened!</h2>
          <p>Hi ${entry.name},</p>
          <p>A <strong>${spotType}</strong> spot just opened in the <strong>${category}</strong> category on SiouxFallsPros.com. You are first on the waitlist.</p>
          <p><strong>This offer expires in 48 hours.</strong></p>
          <a href="${process.env.SITE_URL}/advertise.html" style="display:inline-block;margin-top:16px;padding:14px 28px;background:#c8773a;color:white;border-radius:50px;text-decoration:none;font-weight:700;font-size:16px">Claim Your Spot Now →</a>
        </div>`,
    });
  } catch (err) { console.error('Waitlist email error:', err.message); }
}
