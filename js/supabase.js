// ── Supabase client ───────────────────────────────────────────────
const SUPABASE_URL = 'https://jqirgxzdigwtaorbaqtq.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpxaXJneHpkaWd3dGFvcmJhcXRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM1Mzg5NDUsImV4cCI6MjA4OTExNDk0NX0.YFqDvNeC6z-Jk_n_q2s-4MBLlQeUJ0Bk46wK3Nz2dYs';

// Simple Supabase REST API wrapper - no npm needed
const db = {
  async query(table, params = {}) {
    let url = `${SUPABASE_URL}/rest/v1/${table}?`;
    if (params.select)  url += `select=${params.select}&`;
    if (params.eq)      Object.entries(params.eq).forEach(([k,v]) => url += `${k}=eq.${v}&`);
    if (params.order)   url += `order=${params.order}&`;
    if (params.limit)   url += `limit=${params.limit}&`;

    const res = await fetch(url, {
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
      }
    });
    return res.json();
  },

  async insert(table, data) {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation',
      },
      body: JSON.stringify(data),
    });
    return res.json();
  },

  async update(table, data, eq) {
    let url = `${SUPABASE_URL}/rest/v1/${table}?`;
    Object.entries(eq).forEach(([k,v]) => url += `${k}=eq.${v}&`);
    const res = await fetch(url, {
      method: 'PATCH',
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation',
      },
      body: JSON.stringify(data),
    });
    return res.json();
  },

  async delete(table, eq) {
    let url = `${SUPABASE_URL}/rest/v1/${table}?`;
    Object.entries(eq).forEach(([k,v]) => url += `${k}=eq.${v}&`);
    const res = await fetch(url, {
      method: 'DELETE',
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
      },
    });
    return res.ok;
  },
};

// ── Spot availability functions ───────────────────────────────────

async function getSpotAvailability(categoryKey, spotType) {
  const data = await db.query('spots', {
    eq: { category_key: categoryKey, spot_type: spotType }
  });
  if (!data || data.length === 0) return { available: true, remaining: 10, total: 10 };
  const spot = data[0];
  const remaining = spot.max_spots - spot.taken_spots;
  return {
    available: remaining > 0,
    remaining: Math.max(0, remaining),
    total: spot.max_spots,
    taken: spot.taken_spots,
  };
}

async function loadSpotCounts(categoryKey) {
  const types = ['spotlight', 'page1', 'page2'];
  const counts = {};
  for (const type of types) {
    counts[type] = await getSpotAvailability(categoryKey, type);
  }
  return counts;
}

async function incrementSpot(categoryKey, spotType) {
  const current = await db.query('spots', {
    eq: { category_key: categoryKey, spot_type: spotType }
  });
  if (!current || current.length === 0) return false;
  const spot = current[0];
  if (spot.taken_spots >= spot.max_spots) return false;
  await db.update('spots', { taken_spots: spot.taken_spots + 1 }, { id: spot.id });
  return true;
}

async function decrementSpot(categoryKey, spotType) {
  const current = await db.query('spots', {
    eq: { category_key: categoryKey, spot_type: spotType }
  });
  if (!current || current.length === 0) return;
  const spot = current[0];
  await db.update('spots',
    { taken_spots: Math.max(0, spot.taken_spots - 1) },
    { id: spot.id }
  );
}

// ── Business functions ────────────────────────────────────────────

async function getBusinesses(categoryKey) {
  return db.query('businesses', {
    select: '*',
    eq: { category_key: categoryKey, status: 'active' },
    order: 'featured.desc,rating.desc',
  });
}

async function getAllBusinesses() {
  return db.query('businesses', {
    select: '*',
    order: 'created_at.desc',
  });
}

async function addBusiness(businessData) {
  return db.insert('businesses', businessData);
}

async function updateBusiness(id, data) {
  return db.update('businesses', data, { id });
}

async function approveBusiness(id, categoryKey, spotType) {
  const ok = await incrementSpot(categoryKey, spotType);
  if (!ok) return { error: 'No spots available' };
  return db.update('businesses', {
    status: 'active',
    featured: spotType === 'spotlight' || spotType === 'page1',
    approved_at: new Date().toISOString(),
  }, { id });
}

async function removeBusiness(id, categoryKey, spotType) {
  if (spotType !== 'free') await decrementSpot(categoryKey, spotType);
  return db.update('businesses', { status: 'cancelled', featured: false }, { id });
}

// ── Waitlist functions ────────────────────────────────────────────

async function addToWaitlist(data) {
  return db.insert('waitlist', data);
}

async function getWaitlist(categoryKey) {
  return db.query('waitlist', {
    eq: { category_key: categoryKey },
    order: 'created_at.asc',
  });
}
