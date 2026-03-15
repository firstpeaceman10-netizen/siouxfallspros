// ── SiouxFallsPros SEO Engine ────────────────────────────────────
// Automatically sets the perfect title, description and schema
// markup for every page based on what category is being viewed.
// This is what makes Google rank your pages for local searches.

const SITE_NAME    = 'SiouxFallsPros';
const SITE_URL     = 'https://www.siouxfallspros.com';
const SITE_PHONE   = '(605) 000-0000'; // Update with your real number
const SITE_EMAIL   = 'hello@siouxfallspros.com';

// All Sioux Falls area zip codes and surrounding cities
const SF_AREA = 'Sioux Falls SD, 57101, 57103, 57104, 57105, 57106, 57107, 57108, 57110, Brandon SD, Tea SD, Harrisburg SD, Crooks SD, Dell Rapids SD, Lennox SD, Canton SD, Worthing SD';

// SEO data for every category
const SEO_DATA = {
  // ── Homepage ──────────────────────────────────────────────────
  home: {
    title: 'SiouxFallsPros — #1 Local Business Directory | Sioux Falls, SD',
    description: 'Find the best local professionals in Sioux Falls, SD. Top-rated plumbers, electricians, HVAC, dentists, mechanics, restaurants and more. Only 4.5+ star businesses featured. Serving 57101, 57103, 57104, 57106, Brandon, Tea and Harrisburg.',
    keywords: 'Sioux Falls local businesses, best plumber Sioux Falls, top rated electrician Sioux Falls SD, 605 area code contractors, local pros near me Sioux Falls, 57101 home services',
  },

  // ── Home Services ─────────────────────────────────────────────
  plumbers: {
    title: 'Best Plumbers in Sioux Falls SD | Top Rated 4.5+ Stars | SiouxFallsPros',
    description: 'Find the best plumbers in Sioux Falls, SD. All listings verified 3.0+ stars on Google. Featured plumbers hold 4.5+ star ratings. Emergency plumbing, drain cleaning, water heaters. Serving 57101, 57103, 57104, Brandon, Tea, Harrisburg. Call a trusted local plumber today.',
    keywords: 'best plumber Sioux Falls SD, plumber near me 605, emergency plumber Sioux Falls, top rated plumber 57101, professional plumber Sioux Falls South Dakota, plumbing repair near me',
  },
  electricians: {
    title: 'Best Electricians in Sioux Falls SD | Licensed & Top Rated | SiouxFallsPros',
    description: 'Find trusted licensed electricians in Sioux Falls, SD with 4.5+ star Google ratings. Residential wiring, panel upgrades, generator installation. Serving Sioux Falls, Brandon, Tea, Harrisburg SD. Get connected with a top-rated local electrician today.',
    keywords: 'best electrician Sioux Falls SD, licensed electrician near me 605, top rated electrician 57101, electrical repair Sioux Falls, professional electrician South Dakota',
  },
  hvac: {
    title: 'Best HVAC Companies in Sioux Falls SD | Heating & Cooling | SiouxFallsPros',
    description: 'Top-rated HVAC contractors in Sioux Falls, SD. Furnace repair, AC installation, heating and cooling services. 4.5+ star verified businesses. Emergency HVAC service available. Serving all Sioux Falls zip codes 57101-57110, Brandon and surrounding areas.',
    keywords: 'best HVAC Sioux Falls SD, furnace repair near me 605, air conditioning Sioux Falls, heating cooling contractor 57101, top rated HVAC South Dakota, emergency HVAC near me',
  },
  roofers: {
    title: 'Best Roofers in Sioux Falls SD | Top Rated Roofing | SiouxFallsPros',
    description: 'Find top-rated roofing contractors in Sioux Falls, SD. Roof repair, replacement, storm damage and inspections. Verified 4.5+ star Google ratings. Serving Sioux Falls, Brandon, Tea, Harrisburg and surrounding South Dakota communities.',
    keywords: 'best roofer Sioux Falls SD, roofing contractor near me 605, roof repair Sioux Falls, storm damage roofing 57101, top rated roofing company South Dakota',
  },
  painters: {
    title: 'Best Painters in Sioux Falls SD | Interior & Exterior | SiouxFallsPros',
    description: 'Professional painters in Sioux Falls, SD with top Google ratings. Interior and exterior painting, residential and commercial. Only verified 3.0+ star businesses listed. Serving Sioux Falls 57101-57110, Brandon, Tea and Harrisburg SD.',
    keywords: 'best painter Sioux Falls SD, interior painter near me 605, exterior painting Sioux Falls, professional painting contractor 57101, top rated painters South Dakota',
  },
  lawncare: {
    title: 'Best Lawn Care in Sioux Falls SD | Mowing, Landscaping & Snow | SiouxFallsPros',
    description: 'Top-rated lawn care and landscaping companies in Sioux Falls, SD. Mowing, fertilizing, landscaping, snow removal. Find verified local pros near you. Serving all Sioux Falls neighborhoods and surrounding communities in South Dakota.',
    keywords: 'best lawn care Sioux Falls SD, lawn mowing near me 605, landscaping Sioux Falls, snow removal 57101, top rated lawn service South Dakota, grass cutting near me',
  },
  contractors: {
    title: 'Best General Contractors in Sioux Falls SD | Remodeling | SiouxFallsPros',
    description: 'Find top-rated general contractors in Sioux Falls, SD for home remodeling, additions and construction. Verified Google ratings. Only trusted local contractors. Serving Sioux Falls, Brandon, Tea, Harrisburg and all surrounding SD communities.',
    keywords: 'best general contractor Sioux Falls SD, home remodeling near me 605, construction company Sioux Falls, top rated contractor 57101, professional remodeling South Dakota',
  },
  handyman: {
    title: 'Best Handyman Services in Sioux Falls SD | Repairs & Installs | SiouxFallsPros',
    description: 'Reliable handyman services in Sioux Falls, SD. Home repairs, installations, odd jobs and maintenance. Verified local pros with strong Google ratings. Available throughout Sioux Falls 57101-57110 and surrounding South Dakota areas.',
    keywords: 'best handyman Sioux Falls SD, handyman near me 605, home repair Sioux Falls, fix it man 57101, professional handyman South Dakota, odd jobs near me',
  },
  flooring: {
    title: 'Best Flooring Companies in Sioux Falls SD | Install & Repair | SiouxFallsPros',
    description: 'Top-rated flooring contractors in Sioux Falls, SD. Hardwood, laminate, vinyl, tile and carpet installation and repair. Verified 4.5+ star businesses. Serving all of Sioux Falls and surrounding South Dakota communities.',
    keywords: 'best flooring Sioux Falls SD, hardwood floor installation near me 605, carpet installation Sioux Falls, tile flooring 57101, top rated flooring company South Dakota',
  },
  cleaning: {
    title: 'Best Cleaning Services in Sioux Falls SD | Home & Commercial | SiouxFallsPros',
    description: 'Find top-rated cleaning services in Sioux Falls, SD. Residential and commercial cleaning, deep clean, move-in and move-out. Verified local professionals. Serving Sioux Falls 57101-57110, Brandon, Tea and surrounding SD areas.',
    keywords: 'best cleaning service Sioux Falls SD, house cleaning near me 605, commercial cleaning Sioux Falls, maid service 57101, top rated cleaning company South Dakota',
  },
  garage: {
    title: 'Best Garage Door Repair in Sioux Falls SD | Fast & Reliable | SiouxFallsPros',
    description: 'Top-rated garage door repair and installation in Sioux Falls, SD. Same-day service available. Openers, springs, panels and full replacements. Verified local pros. Serving Sioux Falls 57101-57110, Brandon, Tea and Harrisburg.',
    keywords: 'garage door repair Sioux Falls SD, garage door near me 605, garage door opener Sioux Falls, garage door spring 57101, best garage door company South Dakota',
  },
  pestcontrol: {
    title: 'Best Pest Control in Sioux Falls SD | Exterminator Near Me | SiouxFallsPros',
    description: 'Top-rated pest control and exterminator services in Sioux Falls, SD. Mice, ants, spiders, wasps and more. Verified local professionals with strong Google ratings. Serving all Sioux Falls zip codes and surrounding South Dakota communities.',
    keywords: 'best pest control Sioux Falls SD, exterminator near me 605, bug exterminator Sioux Falls, pest removal 57101, top rated pest control South Dakota',
  },
  treeservice: {
    title: 'Best Tree Service in Sioux Falls SD | Trimming & Removal | SiouxFallsPros',
    description: 'Top-rated tree service companies in Sioux Falls, SD. Tree trimming, removal, stump grinding and emergency tree services. Verified local professionals. Serving Sioux Falls and surrounding South Dakota areas.',
    keywords: 'best tree service Sioux Falls SD, tree removal near me 605, tree trimming Sioux Falls, stump grinding 57101, top rated tree company South Dakota',
  },

  // ── Auto ──────────────────────────────────────────────────────
  mechanics: {
    title: 'Best Auto Mechanics in Sioux Falls SD | Top Rated | SiouxFallsPros',
    description: 'Find the best auto mechanics and car repair shops in Sioux Falls, SD. All listings verified with Google ratings. Oil changes, brakes, engine repair and diagnostics. Serving 57101, 57103, 57104, 57106, Brandon and Tea SD.',
    keywords: 'best mechanic Sioux Falls SD, auto repair near me 605, car repair Sioux Falls, top rated mechanic 57101, professional auto mechanic South Dakota, engine repair near me',
  },
  autobody: {
    title: 'Best Auto Body Shops in Sioux Falls SD | Collision Repair | SiouxFallsPros',
    description: 'Top-rated auto body and collision repair shops in Sioux Falls, SD. Dent repair, paint matching, collision work. Verified Google ratings. Serving Sioux Falls and surrounding South Dakota communities.',
    keywords: 'best auto body Sioux Falls SD, collision repair near me 605, dent repair Sioux Falls, auto body shop 57101, top rated body shop South Dakota',
  },
  tires: {
    title: 'Best Tire Shops in Sioux Falls SD | Sales, Repair & Rotation | SiouxFallsPros',
    description: 'Top-rated tire shops in Sioux Falls, SD. New tires, tire repair, rotation and balancing. Verified local businesses with strong Google ratings. Serving all Sioux Falls neighborhoods and surrounding SD areas.',
    keywords: 'best tire shop Sioux Falls SD, tires near me 605, tire repair Sioux Falls, tire rotation 57101, buy tires South Dakota',
  },
  towing: {
    title: 'Best Towing Services in Sioux Falls SD | 24/7 Roadside | SiouxFallsPros',
    description: '24/7 towing and roadside assistance in Sioux Falls, SD. Fast response, local tow trucks. Verified professionals. Jump starts, lockouts, flat tires and towing. Serving all of Sioux Falls and surrounding South Dakota areas.',
    keywords: 'best towing Sioux Falls SD, tow truck near me 605, roadside assistance Sioux Falls, 24 hour towing 57101, emergency tow South Dakota',
  },

  // ── Health ────────────────────────────────────────────────────
  dentists: {
    title: 'Best Dentists in Sioux Falls SD | Top Rated 4.5+ Stars | SiouxFallsPros',
    description: 'Find the best dentists in Sioux Falls, SD with 4.5+ star Google ratings. General dentistry, cosmetic, orthodontics and family dental care. Verified local professionals. Serving Sioux Falls 57101-57110, Brandon, Tea and Harrisburg SD.',
    keywords: 'best dentist Sioux Falls SD, dentist near me 605, top rated dentist 57101, family dentist Sioux Falls, cosmetic dentist South Dakota, dental care near me',
  },
  doctors: {
    title: 'Best Doctors & Family Care in Sioux Falls SD | SiouxFallsPros',
    description: 'Top-rated doctors and family medicine physicians in Sioux Falls, SD. Primary care, family medicine and general practitioners. Verified local professionals with strong Google ratings. Serving all Sioux Falls zip codes.',
    keywords: 'best doctor Sioux Falls SD, family doctor near me 605, primary care Sioux Falls, physician 57101, top rated doctor South Dakota, family medicine near me',
  },
  chiropractic: {
    title: 'Best Chiropractors in Sioux Falls SD | Top Rated | SiouxFallsPros',
    description: 'Find top-rated chiropractors in Sioux Falls, SD. Back pain, neck pain, spinal adjustments and joint care. Verified 4.5+ star Google ratings. Serving Sioux Falls and surrounding South Dakota communities.',
    keywords: 'best chiropractor Sioux Falls SD, chiropractor near me 605, back pain relief Sioux Falls, chiropractic adjustment 57101, top rated chiropractor South Dakota',
  },
  attorneys: {
    title: 'Best Attorneys & Lawyers in Sioux Falls SD | Top Rated | SiouxFallsPros',
    description: 'Find top-rated attorneys and lawyers in Sioux Falls, SD. Personal injury, family law, criminal defense, real estate and business law. Verified local professionals. Serving Sioux Falls and all of South Dakota.',
    keywords: 'best attorney Sioux Falls SD, lawyer near me 605, top rated lawyer Sioux Falls, personal injury attorney 57101, family law attorney South Dakota',
  },

  // ── Food ──────────────────────────────────────────────────────
  restaurants: {
    title: 'Best Restaurants in Sioux Falls SD | Top Rated Dining | SiouxFallsPros',
    description: 'Discover the best restaurants in Sioux Falls, SD with top Google ratings. From fine dining to casual eats, find your next favorite local restaurant. Only 4.5+ star featured restaurants. Serving all Sioux Falls neighborhoods.',
    keywords: 'best restaurants Sioux Falls SD, restaurant near me 605, top rated dining Sioux Falls, best food 57101, local restaurants South Dakota, where to eat Sioux Falls',
  },
  pizza: {
    title: 'Best Pizza in Sioux Falls SD | Top Rated Pizza Delivery | SiouxFallsPros',
    description: 'Find the best pizza restaurants and delivery in Sioux Falls, SD. Top-rated local pizza shops with strong Google ratings. Delivery and dine-in options. Serving all Sioux Falls zip codes 57101-57110.',
    keywords: 'best pizza Sioux Falls SD, pizza delivery near me 605, pizza restaurant Sioux Falls, top rated pizza 57101, pizza near me South Dakota',
  },

  // ── Beauty ────────────────────────────────────────────────────
  hairsalons: {
    title: 'Best Hair Salons in Sioux Falls SD | Top Rated Stylists | SiouxFallsPros',
    description: 'Find the best hair salons in Sioux Falls, SD with 4.5+ star Google ratings. Cuts, color, highlights and styling. Top-rated local stylists. Serving Sioux Falls 57101-57110, Brandon, Tea and surrounding SD areas.',
    keywords: 'best hair salon Sioux Falls SD, hair salon near me 605, hair stylist Sioux Falls, top rated salon 57101, haircut near me South Dakota',
  },
  barbershops: {
    title: 'Best Barbershops in Sioux Falls SD | Top Rated Barbers | SiouxFallsPros',
    description: 'Find top-rated barbershops in Sioux Falls, SD. Haircuts, shaves, beard trims and men\'s grooming. Verified local barbers with strong Google ratings. Serving all Sioux Falls neighborhoods.',
    keywords: 'best barbershop Sioux Falls SD, barber near me 605, mens haircut Sioux Falls, top rated barber 57101, barbershop South Dakota',
  },

  // ── Real Estate ───────────────────────────────────────────────
  realtors: {
    title: 'Best Realtors in Sioux Falls SD | Top Rated Real Estate | SiouxFallsPros',
    description: 'Find the best realtors and real estate agents in Sioux Falls, SD with top Google ratings. Buy or sell your home with a trusted local expert. Serving Sioux Falls, Brandon, Tea, Harrisburg and surrounding South Dakota communities.',
    keywords: 'best realtor Sioux Falls SD, real estate agent near me 605, top rated realtor Sioux Falls, buy home 57101, sell house South Dakota, real estate agent near me',
  },
  mortgage: {
    title: 'Best Mortgage Lenders in Sioux Falls SD | Home Loans | SiouxFallsPros',
    description: 'Top-rated mortgage lenders and home loan specialists in Sioux Falls, SD. Purchase loans, refinancing and first-time buyer programs. Verified local professionals. Serving all Sioux Falls zip codes and surrounding SD areas.',
    keywords: 'best mortgage lender Sioux Falls SD, home loan near me 605, mortgage broker Sioux Falls, refinance 57101, first time home buyer South Dakota',
  },
};

// ── Apply SEO to current page ─────────────────────────────────────
function applySEO() {
  const params  = new URLSearchParams(window.location.search);
  const page    = window.location.pathname;
  const subKey  = params.get('sub');
  const catKey  = params.get('cat');

  let seo;

  if (page.includes('index') || page === '/' || page.endsWith('/')) {
    seo = SEO_DATA.home;
  } else if (subKey && SEO_DATA[subKey]) {
    seo = SEO_DATA[subKey];
  } else if (catKey && SEO_DATA[catKey]) {
    seo = SEO_DATA[catKey];
  } else {
    seo = SEO_DATA.home;
  }

  // Set title
  document.title = seo.title;

  // Set or update meta description
  setMeta('description', seo.description);
  setMeta('keywords', seo.keywords);

  // Open Graph tags (for social sharing)
  setMetaProp('og:title',       seo.title);
  setMetaProp('og:description', seo.description);
  setMetaProp('og:url',         window.location.href);
  setMetaProp('og:type',        'website');
  setMetaProp('og:site_name',   SITE_NAME);
  setMetaProp('og:image',       SITE_URL + '/hero-bg.jpg');

  // Twitter card
  setMetaName('twitter:card',        'summary_large_image');
  setMetaName('twitter:title',       seo.title);
  setMetaName('twitter:description', seo.description);

  // Canonical URL
  setCanonical(window.location.href);

  // Schema markup - LocalBusiness
  injectSchema(seo, subKey || catKey);
}

function setMeta(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) { el = document.createElement('meta'); el.name = name; document.head.appendChild(el); }
  el.content = content;
}

function setMetaProp(prop, content) {
  let el = document.querySelector(`meta[property="${prop}"]`);
  if (!el) { el = document.createElement('meta'); el.setAttribute('property', prop); document.head.appendChild(el); }
  el.content = content;
}

function setMetaName(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) { el = document.createElement('meta'); el.name = name; document.head.appendChild(el); }
  el.content = content;
}

function setCanonical(url) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) { el = document.createElement('link'); el.rel = 'canonical'; document.head.appendChild(el); }
  el.href = url;
}

function injectSchema(seo, categoryKey) {
  // Remove existing schema
  document.querySelectorAll('script[type="application/ld+json"]').forEach(s => s.remove());

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': SITE_NAME,
    'url': SITE_URL,
    'description': seo.description,
    'potentialAction': {
      '@type': 'SearchAction',
      'target': SITE_URL + '/categories.html?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  // Add local business directory schema
  const directorySchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'SiouxFallsPros',
    'description': 'Sioux Falls, SD local business directory featuring top-rated professionals',
    'url': SITE_URL,
    'telephone': SITE_PHONE,
    'email': SITE_EMAIL,
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Sioux Falls',
      'addressRegion': 'SD',
      'postalCode': '57101',
      'addressCountry': 'US'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '43.5446',
      'longitude': '-96.7311'
    },
    'areaServed': [
      'Sioux Falls SD',
      'Brandon SD',
      'Tea SD',
      'Harrisburg SD',
      'Crooks SD',
      'Dell Rapids SD',
      'Lennox SD'
    ],
    'priceRange': '$',
  };

  const s1 = document.createElement('script');
  s1.type = 'application/ld+json';
  s1.textContent = JSON.stringify(schema);
  document.head.appendChild(s1);

  const s2 = document.createElement('script');
  s2.type = 'application/ld+json';
  s2.textContent = JSON.stringify(directorySchema);
  document.head.appendChild(s2);
}

// Run on every page load
document.addEventListener('DOMContentLoaded', applySEO);
