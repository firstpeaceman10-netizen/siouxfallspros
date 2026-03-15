// ── Mobile nav ────────────────────────────────────────────────────
function toggleNav() {
  document.getElementById('mainNav')?.classList.toggle('open');
}
document.addEventListener('click', e => {
  const nav    = document.getElementById('mainNav');
  const toggle = document.querySelector('.nav-toggle');
  const dropdown = document.getElementById('searchDropdown');
  const searchBox = document.getElementById('searchBox');

  if (nav && toggle && !nav.contains(e.target) && !toggle.contains(e.target)) {
    nav.classList.remove('open');
  }
  if (dropdown && searchBox && !searchBox.contains(e.target) && !dropdown.contains(e.target)) {
    closeDropdown();
  }
});

// ── Dropdown search ───────────────────────────────────────────────
function openDropdown() {
  const dd = document.getElementById('searchDropdown');
  const inner = document.getElementById('dropdownInner');
  if (!dd || !inner) return;

  // Build full dropdown
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
      a.innerHTML = `
        <div class="dropdown-item-icon">${item.icon}</div>
        <div>
          <div class="dropdown-item-text">${item.name}</div>
          <div class="dropdown-item-desc">${item.desc}</div>
        </div>`;
      inner.appendChild(a);
    });

    const divider = document.createElement('div');
    divider.className = 'dropdown-divider';
    inner.appendChild(divider);
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

  if (!q.trim()) {
    openDropdown();
    return;
  }

  const term = q.toLowerCase();
  let found = false;

  DROPDOWN_DATA.forEach(group => {
    const matches = group.items.filter(item =>
      item.name.toLowerCase().includes(term) ||
      item.desc.toLowerCase().includes(term) ||
      group.group.toLowerCase().includes(term)
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
        a.innerHTML = `
          <div class="dropdown-item-icon">${item.icon}</div>
          <div>
            <div class="dropdown-item-text">${item.name}</div>
            <div class="dropdown-item-desc">${item.desc}</div>
          </div>`;
        inner.appendChild(a);
      });
    }
  });

  if (!found) {
    inner.innerHTML = `<div class="dropdown-no-results">No results for "<strong>${q}</strong>" — try a different term</div>`;
  }
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

  // Find best match
  for (const group of DROPDOWN_DATA) {
    for (const item of group.items) {
      if (item.name.toLowerCase().includes(service) ||
          service.includes(item.name.toLowerCase().split(' ')[0])) {
        window.location.href = item.url;
        return;
      }
    }
  }
  // No match — go to categories page
  window.location.href = `categories.html?q=${encodeURIComponent(service)}`;
}

// ── Homepage spotlights ───────────────────────────────────────────
function renderHomepageSpotlights() {
  const grid = document.getElementById('spotlightsGrid');
  if (!grid) return;

  const mainCats = ['Home Services','Auto','Health & Wellness','Legal & Financial','Food & Dining','Beauty & Personal Care','Real Estate','Pets & Veterinarians'];

  mainCats.forEach(catName => {
    const biz = HOMEPAGE_SPOTLIGHTS.find(s => s.category === catName);
    const card = document.createElement('div');

    if (biz) {
      // Claimed spotlight — clicks through to their website
      card.className = 'spotlight-card';
      card.onclick = () => { if (biz.website) window.open(biz.website, '_blank'); };
      card.innerHTML = `
        <div class="spotlight-top">
          <span class="spotlight-badge">⭐ Premium</span>
          <span class="spotlight-category">${catName}</span>
        </div>
        <div class="spotlight-logo">${biz.emoji || '⭐'}</div>
        <div class="spotlight-name">${biz.name}</div>
        <div class="spotlight-rating">
          <span class="spotlight-stars">${renderStars(biz.rating)}</span>
          <span class="spotlight-rating-num">${biz.rating?.toFixed(1)}</span>
          <span class="spotlight-reviews">(${biz.reviews} reviews)</span>
        </div>
        <div class="spotlight-desc">${biz.description}</div>
        <div class="spotlight-actions">
          <a href="tel:${biz.phone?.replace(/\D/g,'')}" class="spotlight-call" onclick="event.stopPropagation()">📞 Call</a>
          ${biz.website ? `<a href="${biz.website}" target="_blank" class="spotlight-visit" onclick="event.stopPropagation()">🌐 Visit</a>` : ''}
        </div>`;
    } else {
      // Empty slot
      card.className = 'spotlight-card spotlight-empty';
      card.innerHTML = `
        <div class="spotlight-empty-icon">⭐</div>
        <h4>${catName}</h4>
        <p>Premium spot available</p>
        <a href="advertise.html" class="spotlight-claim">Claim — $50/mo</a>`;
    }

    grid.appendChild(card);
  });
}

function renderStars(r) {
  if (!r) return '☆☆☆☆☆';
  const full = Math.floor(r);
  const half = r % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

// ── Form submit ───────────────────────────────────────────────────
function submitForm(e) {
  e.preventDefault();
  const form    = document.getElementById('theForm');
  const success = document.getElementById('formSuccess');

  fetch('https://formspree.io/f/xeerlaqr', {
    method: 'POST',
    body: new FormData(form),
    headers: { 'Accept': 'application/json' },
  }).then(r => {
    if (form)    form.style.display    = 'none';
    if (success) success.style.display = 'block';
  }).catch(() => {
    if (form)    form.style.display    = 'none';
    if (success) success.style.display = 'block';
  });
}

// ── Build business card HTML ──────────────────────────────────────
function buildBizCard(b) {
  const stars = renderStars(b.rating);
  const isPremium  = b.rating >= 4.5;
  const isStandard = b.rating >= 3.0 && b.rating < 4.5;
  const badge = isPremium
    ? '<span class="featured-badge">⭐ 4.5+ Featured</span>'
    : isStandard ? '<span class="rating-ok-badge">✓ Verified</span>' : '';

  return `
    <div class="biz-card ${isPremium && b.featured ? 'featured' : ''}"
         data-name="${b.name.toLowerCase()}"
         data-desc="${b.description.toLowerCase()}">
      <div class="biz-logo">${b.logo ? `<img src="${b.logo}" alt="${b.name}"/>` : b.emoji}</div>
      <div class="biz-info">
        <div class="biz-top"><div class="biz-name">${b.name}</div>${badge}</div>
        ${b.rating ? `<div class="biz-rating">
          <span class="stars">${stars}</span>
          <span class="rating-num">${b.rating.toFixed(1)}</span>
          <span class="review-count">(${b.reviews} reviews)</span>
        </div>` : ''}
        <div class="biz-desc">${b.description}</div>
        <div class="biz-actions">
          <a href="tel:${b.phone.replace(/\D/g,'')}" class="btn-call">📞 ${b.phone}</a>
          ${b.website ? `<a href="${b.website}" target="_blank" class="btn-website">🌐 Website</a>` : ''}
          ${!b.featured ? `<a href="advertise.html" class="btn-claim">📋 Claim listing</a>` : ''}
        </div>
      </div>
    </div>`;
}

// ── Init ──────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderHomepageSpotlights();
});
