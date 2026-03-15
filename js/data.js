// ── All categories, subcategories and businesses ─────────────────
// This is the master data file. Add businesses here.
// Rating rules:
//   4.5+ = premium eligible (featured badge, can buy spotlight)
//   3.0-4.4 = standard listing (page 1 or page 2)
//   below 3.0 = NOT listed

const CATEGORIES = {

  home: {
    name: 'Home Services',
    desc: 'Trusted home service professionals serving Sioux Falls and surrounding areas',
    spotlight: null, // Set to a business object when someone pays $50/month
    subcategories: [
      { key: 'plumbers',     name: 'Plumbers',          icon: '🚿', desc: 'Repairs, installs & emergencies' },
      { key: 'electricians', name: 'Electricians',       icon: '⚡', desc: 'Wiring, panels & installations' },
      { key: 'hvac',         name: 'HVAC',               icon: '❄️', desc: 'Heating, cooling & air quality' },
      { key: 'roofers',      name: 'Roofers',            icon: '🏠', desc: 'Repair, replace & inspect' },
      { key: 'painters',     name: 'Painters',           icon: '🎨', desc: 'Interior & exterior painting' },
      { key: 'lawncare',     name: 'Lawn Care',          icon: '🌿', desc: 'Mowing, landscaping & snow removal' },
      { key: 'contractors',  name: 'General Contractors',icon: '🏗️', desc: 'Remodeling & construction' },
      { key: 'handyman',     name: 'Handyman',           icon: '🔨', desc: 'Odd jobs & home repairs' },
      { key: 'flooring',     name: 'Flooring',           icon: '🪵', desc: 'Install, repair & refinish' },
      { key: 'cleaning',     name: 'Cleaning Services',  icon: '✨', desc: 'Home & commercial cleaning' },
    ]
  },

  auto: {
    name: 'Auto',
    desc: 'Top-rated auto repair and services in Sioux Falls, SD',
    spotlight: null,
    subcategories: [
      { key: 'mechanics',  name: 'Auto Mechanics',     icon: '🔧', desc: 'Repairs, diagnostics & maintenance' },
      { key: 'autobody',   name: 'Auto Body & Collision',icon: '🚗',desc: 'Dent repair & collision work' },
      { key: 'tires',      name: 'Tire Shops',          icon: '🛞', desc: 'Sales, repair & rotation' },
      { key: 'oilchange',  name: 'Oil Change',          icon: '🛢️', desc: 'Quick lube & oil services' },
      { key: 'towing',     name: 'Towing',              icon: '🚚', desc: '24/7 towing & roadside' },
    ]
  },

  health: {
    name: 'Health & Wellness',
    desc: 'Trusted healthcare professionals in Sioux Falls, SD',
    spotlight: null,
    subcategories: [
      { key: 'dentists',     name: 'Dentists',           icon: '🦷', desc: 'General & cosmetic dentistry' },
      { key: 'doctors',      name: 'Doctors & Family Care',icon:'⚕️',desc: 'Primary care & family medicine' },
      { key: 'chiropractic', name: 'Chiropractors',      icon: '🦴', desc: 'Spinal & joint care' },
      { key: 'eyecare',      name: 'Eye Care',           icon: '👁️', desc: 'Optometrists & vision care' },
      { key: 'mentalhealth', name: 'Mental Health',      icon: '🧠', desc: 'Therapy & counseling' },
      { key: 'urgentcare',   name: 'Urgent Care',        icon: '🏥', desc: 'Walk-in & immediate care' },
      { key: 'vets',         name: 'Veterinarians',      icon: '🐾', desc: 'Pet health & animal care' },
    ]
  },

  legal: {
    name: 'Legal & Financial',
    desc: 'Trusted legal and financial professionals in Sioux Falls, SD',
    spotlight: null,
    subcategories: [
      { key: 'attorneys',   name: 'Attorneys',           icon: '⚖️', desc: 'Legal representation & advice' },
      { key: 'accountants', name: 'Accountants & Tax',   icon: '💰', desc: 'Tax prep & accounting services' },
      { key: 'insurance',   name: 'Insurance Agents',    icon: '🛡️', desc: 'Auto, home & life insurance' },
      { key: 'financial',   name: 'Financial Advisors',  icon: '📈', desc: 'Investment & retirement planning' },
    ]
  },

  food: {
    name: 'Food & Dining',
    desc: 'Top-rated restaurants and dining in Sioux Falls, SD',
    spotlight: null,
    subcategories: [
      { key: 'restaurants', name: 'Restaurants',         icon: '🍽️', desc: 'Full service dining' },
      { key: 'pizza',       name: 'Pizza',               icon: '🍕', desc: 'Pizza delivery & dine-in' },
      { key: 'mexican',     name: 'Mexican Food',        icon: '🌮', desc: 'Tacos, burritos & more' },
      { key: 'asian',       name: 'Asian Food',          icon: '🍜', desc: 'Chinese, Thai, sushi & more' },
      { key: 'breakfast',   name: 'Breakfast & Brunch',  icon: '🍳', desc: 'Morning dining favorites' },
      { key: 'bars',        name: 'Bars & Nightlife',    icon: '🍺', desc: 'Bars, pubs & entertainment' },
      { key: 'foodtrucks',  name: 'Food Trucks',         icon: '🚐', desc: 'Local mobile food vendors' },
    ]
  },

  beauty: {
    name: 'Beauty & Personal Care',
    desc: 'Top-rated salons, spas and personal care in Sioux Falls, SD',
    spotlight: null,
    subcategories: [
      { key: 'hairsalons',  name: 'Hair Salons',         icon: '💇', desc: 'Cuts, color & styling' },
      { key: 'barbershops', name: 'Barbershops',         icon: '💈', desc: 'Cuts, shaves & grooming' },
      { key: 'nailsalons',  name: 'Nail Salons',         icon: '💅', desc: 'Manicures & pedicures' },
      { key: 'spas',        name: 'Spas & Massage',      icon: '💆', desc: 'Relaxation & body work' },
      { key: 'tattoo',      name: 'Tattoo Shops',        icon: '🎨', desc: 'Tattoos & piercing' },
    ]
  },

  lifestyle: {
    name: 'Home & Lifestyle',
    desc: 'Home goods, services and lifestyle businesses in Sioux Falls, SD',
    spotlight: null,
    subcategories: [
      { key: 'furniture',    name: 'Furniture Stores',   icon: '🛋️', desc: 'Home & office furniture' },
      { key: 'appliances',   name: 'Appliance Repair',   icon: '🔌', desc: 'Washer, dryer, fridge repair' },
      { key: 'locksmiths',   name: 'Locksmiths',         icon: '🔑', desc: 'Lock repair & emergency' },
      { key: 'movers',       name: 'Moving Companies',   icon: '📦', desc: 'Local & long distance moves' },
      { key: 'storage',      name: 'Storage Units',      icon: '🏪', desc: 'Self storage facilities' },
      { key: 'photographers',name: 'Photographers',      icon: '📷', desc: 'Portrait, wedding & events' },
    ]
  },

  kids: {
    name: 'Kids & Family',
    desc: 'Trusted family and children services in Sioux Falls, SD',
    spotlight: null,
    subcategories: [
      { key: 'daycares',    name: 'Daycares',            icon: '👶', desc: 'Childcare & daycare centers' },
      { key: 'tutoring',    name: 'Tutoring',            icon: '📚', desc: 'Academic tutoring & test prep' },
      { key: 'pediatrics',  name: 'Pediatricians',       icon: '🩺', desc: 'Children\'s health care' },
      { key: 'kidsactivities',name:'Kids Activities',    icon: '🎠', desc: 'Classes, camps & fun' },
    ]
  },

  pets: {
    name: 'Pets & Veterinarians',
    desc: 'Trusted pet care and veterinary services in Sioux Falls, SD',
    spotlight: null,
    subcategories: [
      { key: 'petgrooming', name: 'Pet Grooming',        icon: '🐩', desc: 'Baths, cuts & styling' },
      { key: 'dogtraining', name: 'Dog Training',        icon: '🐕', desc: 'Obedience & behavior training' },
      { key: 'petboarding', name: 'Pet Boarding',        icon: '🏡', desc: 'Overnight & daycare boarding' },
      { key: 'petvets',     name: 'Veterinarians',       icon: '🐾', desc: 'Full service animal care' },
    ]
  },

  realestate: {
    name: 'Real Estate',
    desc: 'Top-rated real estate professionals in Sioux Falls, SD',
    spotlight: null,
    subcategories: [
      { key: 'realtors',    name: 'Realtors',            icon: '🏡', desc: 'Buy & sell homes' },
      { key: 'propertymanagement',name:'Property Management',icon:'🏢',desc:'Rental & property management' },
      { key: 'mortgage',    name: 'Mortgage Lenders',    icon: '🏦', desc: 'Home loans & financing' },
      { key: 'homeinspectors',name:'Home Inspectors',    icon: '🔍', desc: 'Pre-purchase inspections' },
    ]
  },

};

// ── Business listings ─────────────────────────────────────────────
// Add businesses here by subcategory key
// Rating rules: 4.5+ = featured, 3.0-4.4 = standard, below 3.0 = DO NOT LIST
const BUSINESSES = {

  plumbers: [
    { id:'pl-1', name:'Krohmer Plumbing', phone:'(605) 336-6909', website:'https://krohmerpluming.com',
      description:'Serving Sioux Falls since 1947. Expert plumbing, heating, and drain cleaning for residential and commercial.', rating:4.7, reviews:312, featured:false, emoji:'🚿' },
    { id:'pl-2', name:'Frisbees Plumbing & Heating', phone:'(605) 338-4861', website:'https://frisbeesinc.com',
      description:'Full-service plumbing, heating, AC and electrical. 140+ employees, fast response across Sioux Falls metro.', rating:4.5, reviews:428, featured:false, emoji:'🚿' },
    { id:'pl-3', name:'Sioux Falls Plumbing', phone:'(605) 250-7473', website:'https://siouxfalls-plumbing.com',
      description:'Family-owned. Honest pricing, no commissions, 90-day workmanship guarantee on every job.', rating:4.9, reviews:87, featured:false, emoji:'🚿' },
    { id:'pl-4', name:'Hander Inc Plumbing & Heating', phone:'(605) 336-3000', website:'',
      description:'Emergency service 24/7. Plumbing and heating specialists serving the five-state area.', rating:4.4, reviews:156, featured:false, emoji:'🚿' },
    { id:'pl-5', name:'Roto-Rooter', phone:'(605) 331-5222', website:'https://rotorooter.com',
      description:'24/7 plumbing and drain cleaning. No extra charge for nights or weekends.', rating:4.2, reviews:203, featured:false, emoji:'🚿' },
  ],

  electricians: [
    { id:'el-1', name:'Waterbury Electric', phone:'(605) 338-8118', website:'https://waterburyheating.com',
      description:'BBB A+ rated. Serving Sioux Falls families since 1950 with honest professional service.', rating:4.8, reviews:274, featured:false, emoji:'⚡' },
    { id:'el-2', name:'Frisbees Electrical', phone:'(605) 338-4861', website:'https://frisbeesinc.com',
      description:'Full electrical service from breakers and fuses to generator installation. All work to latest safety codes.', rating:4.5, reviews:189, featured:false, emoji:'⚡' },
  ],

  hvac: [
    { id:'hv-1', name:'Waterbury Heating & Cooling', phone:'(605) 338-8118', website:'https://waterburyheating.com',
      description:'Lennox Premier Dealer. Expert HVAC repair, replacement and maintenance. Emergency service available.', rating:4.8, reviews:274, featured:false, emoji:'❄️' },
    { id:'hv-2', name:'Frisbees Heating & AC', phone:'(605) 338-4861', website:'https://frisbeesinc.com',
      description:'Complete HVAC services. Often same-day scheduling. Serving all of Sioux Falls metro.', rating:4.6, reviews:341, featured:false, emoji:'❄️' },
    { id:'hv-3', name:'Midwestern Mechanical', phone:'(605) 221-0958', website:'https://midwesternmechanical.com',
      description:'Founded 1983. Largest non-union mechanical contractor in the region. Plumbing, HVAC and fire protection.', rating:4.7, reviews:198, featured:false, emoji:'❄️' },
  ],

  handyman: [
    { id:'hm-1', name:'Dakota Handyman', phone:'(605) 000-0000', website:'https://dakotahandyman.com',
      description:'Sioux Falls handyman focused on excellent service. Repairs, assembly, installations and maintenance.', rating:4.6, reviews:44, featured:false, emoji:'🔨' },
  ],

  // All other subcategories start empty — add businesses as they sign up
  roofers:      [],
  painters:     [],
  lawncare:     [],
  contractors:  [],
  flooring:     [],
  cleaning:     [],
  mechanics:    [],
  autobody:     [],
  tires:        [],
  oilchange:    [],
  towing:       [],
  dentists:     [],
  doctors:      [],
  chiropractic: [],
  eyecare:      [],
  mentalhealth: [],
  urgentcare:   [],
  vets:         [],
  attorneys:    [],
  accountants:  [],
  insurance:    [],
  financial:    [],
  restaurants:  [],
  pizza:        [],
  mexican:      [],
  asian:        [],
  breakfast:    [],
  bars:         [],
  foodtrucks:   [],
  hairsalons:   [],
  barbershops:  [],
  nailsalons:   [],
  spas:         [],
  tattoo:       [],
  furniture:    [],
  appliances:   [],
  locksmiths:   [],
  movers:       [],
  storage:      [],
  photographers:[],
  daycares:     [],
  tutoring:     [],
  pediatrics:   [],
  kidsactivities:[],
  petgrooming:  [],
  dogtraining:  [],
  petboarding:  [],
  petvets:      [],
  realtors:     [],
  propertymanagement:[],
  mortgage:     [],
  homeinspectors:[],
};
