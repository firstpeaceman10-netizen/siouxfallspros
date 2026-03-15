// ── Mobile nav ────────────────────────────────────────────────────
function toggleNav() {
  document.getElementById('mainNav')?.classList.toggle('open');
}
document.addEventListener('click', e => {
  const nav      = document.getElementById('mainNav');
  const toggle   = document.querySelector('.nav-toggle');
  const dropdown = document.getElementById('searchDropdown');
  const searchBox= document.getElementById('searchBox');
  const locResults = document.getElementById('locationResults');
  const locBar   = document.getElementById('locationBar');

  if (nav && toggle && !nav.contains(e.target) && !toggle.contains(e.target))
    nav.classList.remove('open');
  if (dropdown && searchBox && !searchBox.contains(e.target) && !dropdown.contains(e.target))
    closeDropdown();
});

// ── Location ping ─────────────────────────────────────────────────
let userLocation = null;
let currentLocTab = 'businesses';

function pingLocation() {
  const input = document.getElementById('locationInput')?.value.trim();

  if (input) {
    // Use typed address
    geocodeAddress(input);
  } else if (navigator.geolocation) {
    // Use device GPS
    const btn = document.querySelector('.location-ping-btn');
    if (btn) btn.textContent = '📍 Getting location…';
    navigator.geolocation.getCurrentPosition(
      pos => {
        userLocation = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        if (btn) btn.textContent = '📍 Find What\'s Near Me';
        showNearbyResults(userLocation);
      },
      err => {
        if (btn) btn.textContent = '📍 Find What\'s Near Me';
        alert('Could not get your location. Try typing your address instead.');
      },
      { timeout: 10000 }
    );
  } else {
    alert('Please type your address in the field above.');
  }
}

function geocodeAddress(address) {
  if (!window.google) return;
  const geocoder = new google.maps.Geocoder();
  geocoder.geocode({ address: address + ', Sioux Falls, SD' }, (results, status) => {
    if (status === 'OK') {
      userLocation = {
        lat: results[0].geometry.location.lat(),
        lng: results[0].geometry.location.lng(),
      };
      showNearbyResults(userLocation);
    } else {
      alert('Could not find that address. Try a zip code or street address.');
    }
  });
}

function showNearbyResults(location) {
  const resultsDiv = document.getElementById('locationResults');
  if (resultsDiv) {
    resultsDiv.style.display = 'block';
    document.getElementById('locationResultsTitle').textContent = '📍 Near You — ' + (currentLocTab === 'businesses' ? 'Businesses' : currentLocTab === 'attractions' ? 'Attractions' : 'Everything');
  }
  searchNearbyForLocation(location, currentLocTab);
}

function switchLocTab(tab, btn) {
  currentLocTab = tab;
  document.querySelectorAll('.loc-toggle-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  if (userLocation) showNearbyResults(userLocation);
}

function searchNearbyForLocation(location, tab) {
  if (!window.google || !window.placesService) return;
  const grid = document.getElementById('locationResultGrid');
  if (grid) grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:12px;color:var(--text-3)">Searching nearby…</div>';

  const types = tab === 'attractions'
    ? ['tourist_attraction', 'museum', 'park', 'amusement_park']
    : tab === 'businesses'
    ? ['plumber','electrician','dentist','restaurant','car_repair','beauty_salon']
    : ['establishment'];

  const keyword = tab === 'attractions' ? 'attraction' : tab === 'businesses' ? 'local business' : 'local';

  window.placesService.nearbySearch({
    location: new google.maps.LatLng(location.lat, location.lng),
    radius: 5000,
    keyword: keyword,
  }, (results, status) => {
    if (status !== 'OK' || !results) {
      if (grid) grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:12px;color:var(--text-3)">No results found nearby</div>';
      return;
    }
    const filtered = results.filter(p => !p.rating || p.rating >= 3.0).slice(0, 6);
    if (!grid) return;
    grid.innerHTML = filtered.map(place => `
      <a class="location-result-item" href="javascript:void(0)" onclick="openPlace('${encodeURIComponent(place.name)}')">
        <div class="location-result-name">${place.name}</div>
        ${place.rating ? `<div class="location-result-rating">★ ${place.rating.toFixed(1)}</div>` : ''}
        <div class="location-result-dist">${place.vicinity || 'Sioux Falls, SD'}</div>
      </a>`).join('');
  });
}

function openPlace(name) {
  window.open('https://www.google.com/search?q=' + name + ' Sioux Falls SD', '_blank');
}

// ── Radio stations ────────────────────────────────────────────────
function renderRadioStations() {
  const container = document.getElementById('radioStations');
  if (!container || typeof RADIO_STATIONS === 'undefined') return;
  container.innerHTML = RADIO_STATIONS.map(s => `
    <a href="${s.url}" target="_blank" rel="noopener" class="radio-station">
      📻 ${s.name} <span class="radio-station-freq">${s.freq} FM — ${s.format}</span>
    </a>`).join('');
}

// ── Dropdown search ───────────────────────────────────────────────
function openDropdown() {
  const dd    = document.getElementById('searchDropdown');
  const inner = document.getElementById('dropdownInner');
  if (!dd || !inner || typeof DROPDOWN_DATA === 'undefined') return;
  inner.innerHTML = '';
  DROPDOWN_DATA.forEach(group => {
    const label = document.createElement('div');
    label.className = 'dropdown-group-label';
    label.textContent = group.group;
    inner.appendChild(label);
    group.items.forEach(item => {
      const a = document.createElement('a');
      a.href = item.url;
      a.className = 'dropdown-item';
      a.innerHTML = `<div class="dropdown-item-icon">${item.icon}</div><div><div class="dropdown-item-text">${item.name}</div><div class="dropdown-item-desc">${item.desc}</div></div>`;
      inner.appendChild(a);
    });
    const div = document.createElement('div');
    div.className = 'dropdown-divider';
    inner.appendChild(div);
  });
  dd.style.display = 'block';
}

function closeDropdown() {
  const dd = document.getElementById('searchDropdown');
  if (dd) dd.style.display = 'none';
}

function filterDropdown(q) {
  const dd    = document.getElementById('searchDropdown');
  const inner = document.getElementById('dropdownInner');
  const clearBtn = document.getElementById('clearBtn');
  if (!dd || !inner) return;
  if (clearBtn) clearBtn.style.display = q ? 'block' : 'none';
  dd.style.display = 'block';
  inner.innerHTML = '';
  if (!q.trim()) { openDropdown(); return; }
  const term = q.toLowerCase();
  let found = false;
  DROPDOWN_DATA.forEach(group => {
    const matches = group.items.filter(item =>
      item.name.toLowerCase().includes(term) || item.desc.toLowerCase().includes(term) || group.group.toLowerCase().includes(term)
    );
    if (matches.length > 0) {
      found = true;
      const label = document.createElement('div');
      label.className = 'dropdown-group-label';
      label.textContent = group.group;
      inner.appendChild(label);
      matches.forEach(item => {
        const a = document.createElement('a');
        a.href = item.url;
        a.className = 'dropdown-item';
        a.innerHTML = `<div class="dropdown-item-icon">${item.icon}</div><div><div class="dropdown-item-text">${item.name}</div><div class="dropdown-item-desc">${item.desc}</div></div>`;
        inner.appendChild(a);
      });
    }
  });
  if (!found) inner.innerHTML = `<div class="dropdown-no-results">No results for "<strong>${q}</strong>"</div>`;
}

function clearSearch() {
  const input = document.getElementById('serviceInput');
  const clearBtn = document.getElementById('clearBtn');
  if (input) input.value = '';
  if (clearBtn) clearBtn.style.display = 'none';
  openDropdown();
}

function doSearch() {
  const service = document.getElementById('serviceInput')?.value.trim().toLowerCase();
  if (!service) return;
  for (const group of DROPDOWN_DATA) {
    for (const item of group.items) {
      if (item.name.toLowerCase().includes(service) || service.includes(item.name.toLowerCase().split(' ')[0])) {
        window.location.href = item.url;
        return;
      }
    }
  }
  window.location.href = `categories.html?q=${encodeURIComponent(service)}`;
}

// ── Build business card ───────────────────────────────────────────
function buildBizCard(b) {
  const stars = renderStars(b.rating);
  const isPremium  = b.rating >= 4.5;
  const isStandard = b.rating >= 3.0 && b.rating < 4.5;
  const badge = isPremium
    ? '<span class="featured-badge">⭐ 4.5+ Featured</span>'
    : isStandard ? '<span class="rating-ok-badge">✓ Verified</span>' : '';
  const freeTag = b.free ? '<span class="explore-free-badge" style="margin-left:8px">✓ Free</span>' : '';
  return `
    <div class="biz-card ${isPremium && b.featured ? 'featured' : ''}" data-name="${b.name.toLowerCase()}" data-desc="${b.description.toLowerCase()}">
      <div class="biz-logo">${b.logo ? `<img src="${b.logo}" alt="${b.name}"/>` : b.emoji}</div>
      <div class="biz-info">
        <div class="biz-top"><div class="biz-name">${b.name}${freeTag}</div>${badge}</div>
        ${b.rating ? `<div class="biz-rating"><span class="stars">${stars}</span><span class="rating-num">${b.rating.toFixed(1)}</span><span class="review-count">(${b.reviews} reviews)</span></div>` : ''}
        <div class="biz-desc">${b.description}</div>
        <div class="biz-actions">
          <a href="tel:${b.phone?.replace(/\D/g,'')}" class="btn-call">📞 ${b.phone}</a>
          ${b.website ? `<a href="${b.website}" target="_blank" class="btn-website">🌐 Website</a>` : ''}
          ${!b.featured && !b.free ? `<a href="advertise.html" class="btn-claim">📋 Claim listing</a>` : ''}
        </div>
      </div>
    </div>`;
}

function renderStars(r) {
  if (!r) return '';
  return '★'.repeat(Math.floor(r)) + (r%1>=0.5?'½':'') + '☆'.repeat(5-Math.floor(r)-(r%1>=0.5?1:0));
}

// ── Form submit ───────────────────────────────────────────────────
function submitForm(e) {
  e.preventDefault();
  const form    = document.getElementById('theForm');
  const success = document.getElementById('formSuccess');
  fetch('https://formspree.io/f/xeerlaqr', {
    method:'POST', body: new FormData(form),
    headers:{'Accept':'application/json'},
  }).then(() => {
    if (form)    form.style.display    = 'none';
    if (success) success.style.display = 'block';
  }).catch(() => {
    if (form)    form.style.display    = 'none';
    if (success) success.style.display = 'block';
  });
}

// ── Init ──────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderRadioStations();
});
