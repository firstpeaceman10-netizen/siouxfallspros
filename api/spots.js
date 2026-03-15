// api/spots.js
// GET /api/spots?category=plumbers&type=page1
// Returns how many spots are available — frontend uses this to show/hide buy button

const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

module.exports = async (req, res) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { category, type } = req.query;

  if (!category) {
    return res.status(400).json({ error: 'Missing category parameter' });
  }

  try {
    // If type specified — return single spot availability
    if (type) {
      const { data, error } = await supabase
        .from('spots')
        .select('*')
        .eq('category_key', category)
        .eq('spot_type', type)
        .single();

      if (error || !data) {
        return res.json({ available: true, remaining: type === 'spotlight' ? 1 : 10, total: type === 'spotlight' ? 1 : 10, taken: 0 });
      }

      const remaining = Math.max(0, data.max_spots - data.taken_spots);
      return res.json({
        available: remaining > 0,
        remaining,
        total: data.max_spots,
        taken: data.taken_spots,
      });
    }

    // No type — return all spot types for this category
    const { data, error } = await supabase
      .from('spots')
      .select('*')
      .eq('category_key', category);

    if (error) throw error;

    const result = {};
    (data || []).forEach(s => {
      result[s.spot_type] = {
        available: s.taken_spots < s.max_spots,
        remaining: Math.max(0, s.max_spots - s.taken_spots),
        total: s.max_spots,
        taken: s.taken_spots,
      };
    });

    return res.json(result);

  } catch (err) {
    console.error('Spots error:', err);
    return res.status(500).json({ error: 'Could not check spot availability' });
  }
};
