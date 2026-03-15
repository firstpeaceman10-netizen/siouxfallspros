// api/waitlist.js
// POST /api/waitlist
// Adds a business to the waitlist when spots are full

const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

module.exports = async (req, res) => {
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email, phone, businessName, categoryKey, spotType } = req.body;

  if (!name || !email || !categoryKey || !spotType) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // Check not already on waitlist
    const { data: existing } = await supabase
      .from('waitlist').select('id')
      .eq('email', email)
      .eq('category_key', categoryKey)
      .eq('spot_type', spotType)
      .single();

    if (existing) {
      return res.json({ success: true, message: 'Already on waitlist' });
    }

    await supabase.from('waitlist').insert({
      name, email, phone: phone || '',
      business_name: businessName || '',
      category_key: categoryKey,
      spot_type: spotType,
    });

    return res.json({ success: true, message: 'Added to waitlist successfully' });
  } catch (err) {
    console.error('Waitlist error:', err);
    return res.status(500).json({ error: 'Could not join waitlist' });
  }
};
