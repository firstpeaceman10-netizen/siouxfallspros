// ── Business data ────────────────────────────────────────────────
// This is where all your businesses live.
// Featured = true means they show on Page 1 (paying $30/mo)
// Featured = false means free listing
// To add a business just copy a block and fill in the details.

const BUSINESSES = {

  plumbers: {
    icon: '🔧',
    title: 'Plumbers in Sioux Falls',
    desc: 'Find trusted, top-rated plumbers serving Sioux Falls and surrounding areas including Brandon, Tea, and Harrisburg.',
    businesses: [
      {
        id: 'pl-1',
        name: 'Krohmer Plumbing',
        phone: '(605) 336-6909',
        website: 'https://krohmerpluming.com',
        description: 'Serving Sioux Falls since 1947. Expert plumbing, heating, and drain cleaning services for residential and commercial customers.',
        rating: 4.7,
        reviews: 312,
        featured: true,
        emoji: '🔧',
      },
      {
        id: 'pl-2',
        name: 'Frisbees Plumbing & Heating',
        phone: '(605) 338-4861',
        website: 'https://frisbeesinc.com',
        description: 'Full-service plumbing, heating, AC and electrical. Over 140 employees, fast response times across the Sioux Falls metro.',
        rating: 4.5,
        reviews: 428,
        featured: true,
        emoji: '🔧',
      },
      {
        id: 'pl-3',
        name: 'Sioux Falls Plumbing',
        phone: '(605) 250-7473',
        website: 'https://siouxfalls-plumbing.com',
        description: 'Family-owned and operated. Honest pricing, no commissions, 90-day workmanship guarantee on every job.',
        rating: 4.9,
        reviews: 87,
        featured: true,
        emoji: '🔧',
      },
      {
        id: 'pl-4',
        name: 'Hander Inc Plumbing & Heating',
        phone: '(605) 336-3000',
        website: '',
        description: 'Emergency service available 24/7. Plumbing and heating specialists serving the five-state area from Sioux Falls.',
        rating: 4.4,
        reviews: 156,
        featured: false,
        emoji: '🔧',
      },
      {
        id: 'pl-5',
        name: 'Roto-Rooter Plumbing',
        phone: '(605) 331-5222',
        website: 'https://rotorooter.com',
        description: "North America's largest plumbing and drain cleaning service. Available 24/7, no extra charge for nights or weekends.",
        rating: 4.2,
        reviews: 203,
        featured: false,
        emoji: '🔧',
      },
    ]
  },

  electricians: {
    icon: '⚡',
    title: 'Electricians in Sioux Falls',
    desc: 'Licensed electricians serving Sioux Falls, Brandon, Tea, Harrisburg and surrounding South Dakota communities.',
    businesses: [
      {
        id: 'el-1',
        name: 'Waterbury Electric',
        phone: '(605) 338-8118',
        website: 'https://waterburyheating.com',
        description: 'BBB A+ rated electrical, plumbing and HVAC. Serving Sioux Falls families since 1950 with honest, professional service.',
        rating: 4.8,
        reviews: 274,
        featured: true,
        emoji: '⚡',
      },
      {
        id: 'el-2',
        name: 'Frisbees Electrical',
        phone: '(605) 338-4861',
        website: 'https://frisbeesinc.com',
        description: 'Full service electrical from breakers and fuses to generator installation. Work completed to latest safety codes.',
        rating: 4.5,
        reviews: 189,
        featured: true,
        emoji: '⚡',
      },
      {
        id: 'el-3',
        name: 'Thunder Electric',
        phone: '(605) 000-0000',
        website: '',
        description: 'Local electrician serving Sioux Falls. Residential and commercial wiring, panel upgrades, and electrical repairs.',
        rating: 0,
        reviews: 0,
        featured: false,
        emoji: '⚡',
        unclaimed: true,
      },
    ]
  },

  hvac: {
    icon: '❄️',
    title: 'HVAC in Sioux Falls',
    desc: 'Heating, cooling and air quality experts serving Sioux Falls and the surrounding area.',
    businesses: [
      {
        id: 'hv-1',
        name: 'Waterbury Heating & Cooling',
        phone: '(605) 338-8118',
        website: 'https://waterburyheating.com',
        description: 'Lennox Premier Dealer. Expert HVAC repair, replacement and maintenance. After-hours emergency service available.',
        rating: 4.8,
        reviews: 274,
        featured: true,
        emoji: '❄️',
      },
      {
        id: 'hv-2',
        name: 'Frisbees Heating & AC',
        phone: '(605) 338-4861',
        website: 'https://frisbeesinc.com',
        description: 'Complete HVAC services. AC issue? Frisbees gets you scheduled and fixed fast — often same day.',
        rating: 4.6,
        reviews: 341,
        featured: true,
        emoji: '❄️',
      },
      {
        id: 'hv-3',
        name: 'Midwestern Mechanical',
        phone: '(605) 221-0958',
        website: 'https://midwesternmechanical.com',
        description: 'Founded 1983. Largest non-union mechanical contractor in the region. Plumbing, HVAC and fire protection.',
        rating: 4.7,
        reviews: 198,
        featured: true,
        emoji: '❄️',
      },
    ]
  },

  roofers: {
    icon: '🏠',
    title: 'Roofers in Sioux Falls',
    desc: 'Top-rated roofing contractors for repair, replacement and inspection in Sioux Falls, SD.',
    businesses: [
      {
        id: 'ro-1',
        name: 'Sioux Falls Roofing Co.',
        phone: '(605) 000-0000',
        website: '',
        description: 'Local roofing company serving Sioux Falls. Residential and commercial roofing, storm damage repair, free estimates.',
        rating: 0,
        reviews: 0,
        featured: false,
        emoji: '🏠',
        unclaimed: true,
      },
    ]
  },

  painters: {
    icon: '🎨',
    title: 'Painters in Sioux Falls',
    desc: 'Interior and exterior painting professionals in Sioux Falls and surrounding South Dakota communities.',
    businesses: [
      {
        id: 'pa-1',
        name: 'Sioux Falls Painters',
        phone: '(605) 000-0000',
        website: '',
        description: 'Professional interior and exterior painting. Residential and commercial. Free estimates, quality guaranteed.',
        rating: 0,
        reviews: 0,
        featured: false,
        emoji: '🎨',
        unclaimed: true,
      },
    ]
  },

  lawncare: {
    icon: '🌿',
    title: 'Lawn Care in Sioux Falls',
    desc: 'Lawn mowing, landscaping, snow removal and more from local Sioux Falls pros.',
    businesses: [
      {
        id: 'lc-1',
        name: 'Sioux Falls Lawn Pros',
        phone: '(605) 000-0000',
        website: '',
        description: 'Full-service lawn care including mowing, fertilizing, aeration, and snow removal. Serving Sioux Falls metro.',
        rating: 0,
        reviews: 0,
        featured: false,
        emoji: '🌿',
        unclaimed: true,
      },
    ]
  },

  contractors: {
    icon: '🏗️',
    title: 'General Contractors in Sioux Falls',
    desc: 'Remodeling, construction and home improvement contractors serving Sioux Falls, SD.',
    businesses: [
      {
        id: 'co-1',
        name: 'Sioux Falls Contractors',
        phone: '(605) 000-0000',
        website: '',
        description: 'Full-service general contractors for residential remodeling and new construction in Sioux Falls.',
        rating: 0,
        reviews: 0,
        featured: false,
        emoji: '🏗️',
        unclaimed: true,
      },
    ]
  },

  handyman: {
    icon: '🔨',
    title: 'Handyman Services in Sioux Falls',
    desc: 'Reliable handyman services for home repair, assembly, installations and more in Sioux Falls.',
    businesses: [
      {
        id: 'hm-1',
        name: 'Dakota Handyman',
        phone: '(605) 000-0000',
        website: 'https://dakotahandyman.com',
        description: 'Sioux Falls handyman service focused on excellent customer service. Repairs, assembly, installations and maintenance.',
        rating: 4.6,
        reviews: 44,
        featured: false,
        emoji: '🔨',
      },
    ]
  },

  flooring: {
    icon: '🪵',
    title: 'Flooring in Sioux Falls',
    desc: 'Flooring installation, repair and refinishing professionals in Sioux Falls, SD.',
    businesses: [
      {
        id: 'fl-1',
        name: 'Sioux Falls Flooring',
        phone: '(605) 000-0000',
        website: '',
        description: 'All types of flooring installation and repair. Hardwood, laminate, vinyl, tile and carpet in Sioux Falls.',
        rating: 0,
        reviews: 0,
        featured: false,
        emoji: '🪵',
        unclaimed: true,
      },
    ]
  },

  cleaning: {
    icon: '✨',
    title: 'Cleaning Services in Sioux Falls',
    desc: 'Home and commercial cleaning services in Sioux Falls and surrounding areas.',
    businesses: [
      {
        id: 'cl-1',
        name: 'Sioux Falls Clean Pros',
        phone: '(605) 000-0000',
        website: '',
        description: 'Professional residential and commercial cleaning services. Regular, deep clean and move-in/out cleaning.',
        rating: 0,
        reviews: 0,
        featured: false,
        emoji: '✨',
        unclaimed: true,
      },
    ]
  },

};

// ── Render functions ─────────────────────────────────────────────

function renderStars(rating) {
  if (!rating) return '';
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

function buildCard(biz) {
  const stars   = biz.rating ? `
    <div class="biz-rating">
      <span class="stars">${renderStars(biz.rating)}</span>
      <span class="rating-num">${biz.rating.toFixed(1)}</span>
      <span class="review-count">(${biz.reviews} reviews)</span>
    </div>` : '';

  const badge   = biz.featured ? '<span class="featured-badge">⭐ Featured</span>' : '';
  const website = biz.website  ? `<a href="${biz.website}" target="_blank" rel="noopener" class="btn-website">🌐 Website</a>` : '';
  const claim   = biz.unclaimed ? `<a href="advertise.html" class="btn-claim">📋 Claim this listing</a>` : '';

  return `
    <div class="biz-card ${biz.featured ? 'featured' : ''}" data-name="${biz.name.toLowerCase()}" data-desc="${biz.description.toLowerCase()}">
      <div class="biz-logo">${biz.logo ? `<img src="${biz.logo}" alt="${biz.name}" />` : biz.emoji}</div>
      <div class="biz-info">
        <div class="biz-top">
          <div class="biz-name">${biz.name}</div>
          ${badge}
        </div>
        ${stars}
        <div class="biz-desc">${biz.description}</div>
        <div class="biz-actions">
          <a href="tel:${biz.phone.replace(/\D/g,'')}" class="btn-call">📞 ${biz.phone}</a>
          ${website}
          ${claim}
        </div>
      </div>
    </div>`;
}

function loadCategoryPage() {
  const params = new URLSearchParams(window.location.search);
  const cat    = params.get('cat') || 'plumbers';
  const data   = BUSINESSES[cat];

  if (!data) {
    document.title = 'Category Not Found — SiouxFallsPros';
    return;
  }

  // Update page meta
  document.title   = `${data.title} — SiouxFallsPros`;
  document.getElementById('catTitle').textContent = data.title;
  document.getElementById('catDesc').textContent  = data.desc;
  document.getElementById('catIcon').textContent  = data.icon;

  // Split featured vs free
  const featured = data.businesses.filter(b => b.featured);
  const free     = data.businesses.filter(b => !b.featured);

  document.getElementById('featuredListings').innerHTML = featured.length
    ? featured.map(buildCard).join('')
    : '<p style="color:var(--text-3);font-size:14px;padding:16px 0">No featured spots yet. <a href="advertise.html">Be the first!</a></p>';

  document.getElementById('freeListings').innerHTML = free.length
    ? free.map(buildCard).join('')
    : '';
}

function filterListings() {
  const q     = document.getElementById('catSearchInput')?.value.toLowerCase() || '';
  const cards = document.querySelectorAll('.biz-card');
  let   shown = 0;

  cards.forEach(card => {
    const name = card.dataset.name || '';
    const desc = card.dataset.desc || '';
    const match = !q || name.includes(q) || desc.includes(q);
    card.style.display = match ? '' : 'none';
    if (match) shown++;
  });

  const empty = document.getElementById('emptyState');
  if (empty) empty.style.display = shown === 0 ? 'block' : 'none';
}

// Run on page load
if (document.getElementById('featuredListings')) {
  loadCategoryPage();
}
