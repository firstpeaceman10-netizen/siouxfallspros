// ── Mobile nav toggle ────────────────────────────────────────────
function toggleNav() {
  document.querySelector('.nav').classList.toggle('open');
}

// Close nav when clicking outside
document.addEventListener('click', function(e) {
  const nav    = document.querySelector('.nav');
  const toggle = document.querySelector('.nav-toggle');
  if (nav && toggle && !nav.contains(e.target) && !toggle.contains(e.target)) {
    nav.classList.remove('open');
  }
});

// ── Homepage search ──────────────────────────────────────────────
function handleSearch(e) {
  if (e.key === 'Enter') goSearch();
}

function goSearch() {
  const q = document.getElementById('searchInput')?.value.trim().toLowerCase();
  if (!q) return;

  // Map search terms to category pages
  const map = {
    plumb:       'plumbers',
    plumber:     'plumbers',
    pipe:        'plumbers',
    drain:       'plumbers',
    electric:    'electricians',
    electrician: 'electricians',
    wiring:      'electricians',
    outlet:      'electricians',
    hvac:        'hvac',
    heat:        'hvac',
    furnace:     'hvac',
    ac:          'hvac',
    air:         'hvac',
    cooling:     'hvac',
    cool:        'hvac',
    roof:        'roofers',
    roofer:      'roofers',
    shingle:     'roofers',
    paint:       'painters',
    painter:     'painters',
    lawn:        'lawncare',
    grass:       'lawncare',
    mow:         'lawncare',
    landscape:   'lawncare',
    snow:        'lawncare',
    contractor:  'contractors',
    remodel:     'contractors',
    construction:'contractors',
    handyman:    'handyman',
    repair:      'handyman',
    fix:         'handyman',
    floor:       'flooring',
    carpet:      'flooring',
    tile:        'flooring',
    hardwood:    'flooring',
    clean:       'cleaning',
    maid:        'cleaning',
  };

  let matched = null;
  for (const [keyword, cat] of Object.entries(map)) {
    if (q.includes(keyword)) {
      matched = cat;
      break;
    }
  }

  if (matched) {
    window.location.href = `category.html?cat=${matched}`;
  } else {
    window.location.href = `categories.html?q=${encodeURIComponent(q)}`;
  }
}

// ── Advertise form submit ────────────────────────────────────────
function submitForm(e) {
  e.preventDefault();
  const form    = document.getElementById('advertiseForm');
  const success = document.getElementById('formSuccess');

  // In production, replace this with a real form service like Formspree or EmailJS
  // For now it shows a success message
  form.style.display    = 'none';
  if (success) success.style.display = 'block';

  // You can add Formspree here:
  // fetch('https://formspree.io/f/YOUR_FORM_ID', {
  //   method: 'POST',
  //   body: new FormData(form),
  //   headers: { 'Accept': 'application/json' }
  // });
}

// ── Smooth scroll for anchor links ──────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
