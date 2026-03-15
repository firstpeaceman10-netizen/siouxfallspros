// api/checkout.js
// POST /api/checkout
// Creates a Stripe checkout session for monthly subscription

const stripe   = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

const PRICES = {
  spotlight: 5000,  // $50/month
  page1:     3000,  // $30/month
  page2:     1500,  // $15/month
  free:      0,
};

const PRICE_NAMES = {
  spotlight: 'Premium Category Spotlight',
  page1:     'Page 1 Featured Listing',
  page2:     'Page 2 Listing',
  free:      'Free Listing',
};

module.exports = async (req, res) => {
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const {
    businessName, ownerName, phone, email,
    website, categoryKey, description,
    rating, reviews, spotType, emoji,
  } = req.body;

  if (!businessName || !email || !categoryKey || !spotType) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Free listing — no Stripe needed
  if (spotType === 'free') {
    const { data, error } = await supabase.from('businesses').insert({
      name: businessName, owner_name: ownerName || '',
      phone: phone || '', email, website: website || '',
      category_key: categoryKey, description: description || '',
      rating: parseFloat(rating) || 0, reviews: parseInt(reviews) || 0,
      spot_type: 'free', status: 'active', featured: false,
      monthly_amount: 0, emoji: emoji || '⭐',
    }).select().single();

    if (error) return res.status(500).json({ error: 'Could not create free listing' });
    return res.json({ success: true, type: 'free', businessId: data.id });
  }

  try {
    // Double-check spot availability
    const { data: spotData } = await supabase
      .from('spots')
      .select('*')
      .eq('category_key', categoryKey)
      .eq('spot_type', spotType)
      .single();

    if (spotData && spotData.taken_spots >= spotData.max_spots) {
      return res.status(400).json({
        error: 'SPOTS_FULL',
        message: `All ${PRICE_NAMES[spotType]} spots are taken for ${categoryKey}.`,
      });
    }

    // Create Stripe customer
    const customer = await stripe.customers.create({
      email, name: businessName,
      metadata: { businessName, ownerName, phone, categoryKey, spotType },
    });

    // Create recurring price
    const price = await stripe.prices.create({
      unit_amount: PRICES[spotType],
      currency: 'usd',
      recurring: { interval: 'month' },
      product_data: {
        name: `SiouxFallsPros — ${PRICE_NAMES[spotType]} (${categoryKey})`,
      },
    });

    const siteUrl = process.env.SITE_URL || 'https://www.siouxfallspros.com';

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      customer: customer.id,
      payment_method_types: ['card'],
      mode: 'subscription',
      line_items: [{ price: price.id, quantity: 1 }],
      success_url: `${siteUrl}/success.html?session={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/advertise.html`,
      metadata: {
        businessName, ownerName, phone, email, website,
        categoryKey, description,
        rating: String(rating || 0),
        reviews: String(reviews || 0),
        spotType, emoji: emoji || '⭐',
      },
    });

    // Save pending record
    await supabase.from('businesses').insert({
      name: businessName, owner_name: ownerName || '',
      phone: phone || '', email, website: website || '',
      category_key: categoryKey, description: description || '',
      rating: parseFloat(rating) || 0, reviews: parseInt(reviews) || 0,
      spot_type: spotType, status: 'pending', featured: false,
      monthly_amount: PRICES[spotType] / 100,
      stripe_customer_id: customer.id,
      emoji: emoji || '⭐',
    });

    return res.json({ url: session.url, sessionId: session.id });

  } catch (err) {
    console.error('Checkout error:', err);
    return res.status(500).json({ error: 'Could not create checkout session' });
  }
};
