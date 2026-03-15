// api/businesses.js
// GET /api/businesses?category=plumbers
// Returns active businesses from Supabase for a category
// Frontend calls this to show real paid listings

const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

module.exports = async (req, res) => {
  if (req.method === 'OPTIONS') return res.status(200).end();

  const { category } = req.query;

  if (!category) {
    return res.status(400).json({ error: 'Missing category parameter' });
  }

  try {
    const { data, error } = await supabase
      .from('businesses')
      .select('id,name,phone,website,description,rating,reviews,featured,spot_type,emoji,logo_url')
      .eq('category_key', category)
      .eq('status', 'active')
      .gte('rating', 3.0)
      .order('featured', { ascending: false })
      .order('rating', { ascending: false });

    if (error) throw error;

    return res.json(data || []);
  } catch (err) {
    console.error('Businesses fetch error:', err);
    return res.status(500).json({ error: 'Could not fetch businesses' });
  }
};
