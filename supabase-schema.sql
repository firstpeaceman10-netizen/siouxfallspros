-- ============================================================
-- SiouxFallsPros Database Schema
-- Run this entire file in Supabase SQL Editor
-- ============================================================

-- ── Spot tracking ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS spots (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_key  TEXT NOT NULL,  -- e.g. 'plumbers', 'electricians'
  spot_type     TEXT NOT NULL CHECK (spot_type IN ('spotlight', 'page1', 'page2')),
  max_spots     INT NOT NULL DEFAULT 10,
  taken_spots   INT NOT NULL DEFAULT 0,
  created_at    TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE (category_key, spot_type)
);

-- ── Businesses ────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS businesses (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name          TEXT NOT NULL,
  owner_name    TEXT NOT NULL,
  phone         TEXT NOT NULL,
  email         TEXT NOT NULL,
  website       TEXT DEFAULT '',
  category_key  TEXT NOT NULL,
  description   TEXT DEFAULT '',
  rating        DECIMAL(3,1) DEFAULT 0,
  reviews       INT DEFAULT 0,
  spot_type     TEXT DEFAULT 'free' CHECK (spot_type IN ('spotlight', 'page1', 'page2', 'free')),
  status        TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'active', 'rejected', 'cancelled')),
  stripe_customer_id    TEXT DEFAULT '',
  stripe_subscription_id TEXT DEFAULT '',
  monthly_amount DECIMAL(10,2) DEFAULT 0,
  emoji         TEXT DEFAULT '⭐',
  logo_url      TEXT DEFAULT '',
  featured      BOOLEAN DEFAULT FALSE,
  created_at    TIMESTAMPTZ DEFAULT NOW(),
  approved_at   TIMESTAMPTZ,
  next_billing  TIMESTAMPTZ
);

-- ── Waitlist ──────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS waitlist (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name          TEXT NOT NULL,
  email         TEXT NOT NULL,
  phone         TEXT NOT NULL,
  business_name TEXT NOT NULL,
  category_key  TEXT NOT NULL,
  spot_type     TEXT NOT NULL,
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

-- ── Admin settings ────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS settings (
  key   TEXT PRIMARY KEY,
  value TEXT NOT NULL
);

-- Admin password (change this to your own password)
INSERT INTO settings (key, value) VALUES ('admin_password', 'SFPros2025!') ON CONFLICT DO NOTHING;

-- ── Seed initial spot counts for all categories ───────────────
INSERT INTO spots (category_key, spot_type, max_spots, taken_spots) VALUES
-- Home Services
('plumbers',     'spotlight', 1,  0),
('plumbers',     'page1',     10, 0),
('plumbers',     'page2',     999,0),
('electricians', 'spotlight', 1,  0),
('electricians', 'page1',     10, 0),
('electricians', 'page2',     999,0),
('hvac',         'spotlight', 1,  0),
('hvac',         'page1',     10, 0),
('hvac',         'page2',     999,0),
('roofers',      'spotlight', 1,  0),
('roofers',      'page1',     10, 0),
('roofers',      'page2',     999,0),
('painters',     'spotlight', 1,  0),
('painters',     'page1',     10, 0),
('painters',     'page2',     999,0),
('lawncare',     'spotlight', 1,  0),
('lawncare',     'page1',     10, 0),
('lawncare',     'page2',     999,0),
('contractors',  'spotlight', 1,  0),
('contractors',  'page1',     10, 0),
('contractors',  'page2',     999,0),
('handyman',     'spotlight', 1,  0),
('handyman',     'page1',     10, 0),
('handyman',     'page2',     999,0),
('flooring',     'spotlight', 1,  0),
('flooring',     'page1',     10, 0),
('flooring',     'page2',     999,0),
('cleaning',     'spotlight', 1,  0),
('cleaning',     'page1',     10, 0),
('cleaning',     'page2',     999,0),
-- Auto
('mechanics',    'spotlight', 1,  0),
('mechanics',    'page1',     10, 0),
('mechanics',    'page2',     999,0),
('autobody',     'spotlight', 1,  0),
('autobody',     'page1',     10, 0),
('autobody',     'page2',     999,0),
('tires',        'spotlight', 1,  0),
('tires',        'page1',     10, 0),
('tires',        'page2',     999,0),
('towing',       'spotlight', 1,  0),
('towing',       'page1',     10, 0),
('towing',       'page2',     999,0),
-- Health
('dentists',     'spotlight', 1,  0),
('dentists',     'page1',     10, 0),
('dentists',     'page2',     999,0),
('doctors',      'spotlight', 1,  0),
('doctors',      'page1',     10, 0),
('doctors',      'page2',     999,0),
-- Legal
('attorneys',    'spotlight', 1,  0),
('attorneys',    'page1',     10, 0),
('attorneys',    'page2',     999,0),
('accountants',  'spotlight', 1,  0),
('accountants',  'page1',     10, 0),
('accountants',  'page2',     999,0),
-- Food
('restaurants',  'spotlight', 1,  0),
('restaurants',  'page1',     10, 0),
('restaurants',  'page2',     999,0),
('pizza',        'spotlight', 1,  0),
('pizza',        'page1',     10, 0),
('pizza',        'page2',     999,0),
-- Beauty
('hairsalons',   'spotlight', 1,  0),
('hairsalons',   'page1',     10, 0),
('hairsalons',   'page2',     999,0),
('barbershops',  'spotlight', 1,  0),
('barbershops',  'page1',     10, 0),
('barbershops',  'page2',     999,0),
-- Real Estate
('realtors',     'spotlight', 1,  0),
('realtors',     'page1',     10, 0),
('realtors',     'page2',     999,0),
('mortgage',     'spotlight', 1,  0),
('mortgage',     'page1',     10, 0),
('mortgage',     'page2',     999,0)
ON CONFLICT DO NOTHING;
