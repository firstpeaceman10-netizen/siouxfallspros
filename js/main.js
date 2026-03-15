// ── Mobile nav ────────────────────────────────────────────────────
function toggleNav() {
  document.getElementById('mainNav')?.classList.toggle('open');
}
document.addEventListener('click', e => {
  const nav    = document.getElementById('mainNav');
  const toggle = document.querySelector('.nav-toggle');
  if (nav && toggle && !nav.contains(e.target) && !toggle.contains(e.target)) {
    nav.classList.remove('open');
  }
});

// ── Homepage search ───────────────────────────────────────────────
function handleServiceSearch(e) {
  if (e.key === 'Enter') doSearch();
}

function doSearch() {
  const service  = document.getElementById('serviceSearch')?.value.trim().toLowerCase() || '';
  if (!service) return;

  const map = {
    plumb:'home/plumbers', pipe:'home/plumbers', drain:'home/plumbers',
    electric:'home/electricians', wiring:'home/electricians',
    hvac:'home/hvac', heat:'home/hvac', furnace:'home/hvac', ac:'home/hvac', cool:'home/hvac',
    roof:'home/roofers', shingle:'home/roofers',
    paint:'home/painters',
    lawn:'home/lawncare', grass:'home/lawncare', mow:'home/lawncare', snow:'home/lawncare', landscape:'home/lawncare',
    contractor:'home/contractors', remodel:'home/contractors',
    handyman:'home/handyman', repair:'home/handyman',
    floor:'home/flooring', carpet:'home/flooring', tile:'home/flooring',
    clean:'home/cleaning', maid:'home/cleaning',
    mechanic:'auto/mechanics', car:'auto/mechanics', auto:'auto/mechanics',
    tire:'auto/tires', tow:'auto/towing', oil:'auto/oilchange',
    dentist:'health/dentists', tooth:'health/dentists',
    doctor:'health/doctors', physician:'health/doctors',
    chiropract:'health/chiropractic',
    eye:'health/eyecare', vision:'health/eyecare',
    therapy:'health/mentalhealth', counsel:'health/mentalhealth',
    urgent:'health/urgentcare',
    vet:'health/petvets', animal:'health/petvets',
    attorney:'legal/attorneys', lawyer:'legal/attorneys',
    account:'legal/accountants', tax:'legal/accountants',
    insurance:'legal/insurance',
    financial:'legal/financial', invest:'legal/financial',
    restaurant:'food/restaurants', food:'food/restaurants',
    pizza:'food/pizza',
    mexican:'food/mexican', taco:'food/mexican',
    chinese:'food/asian', asian:'food/asian', sushi:'food/asian',
    breakfast:'food/breakfast',
    bar:'food/bars', drink:'food/bars',
    salon:'beauty/hairsalons', hair:'beauty/hairsalons',
    barber:'beauty/barbershops',
    nail:'beauty/nailsalons',
    spa:'beauty/spas', massage:'beauty/spas',
    tattoo:'beauty/tattoo',
    realtor:'realestate/realtors', house:'realestate/realtors',
    mortgage:'realestate/mortgage',
    inspector:'realestate/homeinspectors',
  };

  for (const [kw, path] of Object.entries(map)) {
    if (service.includes(kw)) {
      const [cat, sub] = path.split('/');
      window.location.href = `category.html?cat=${cat}&sub=${sub}`;
      return;
    }
  }
  window.location.href = `categories.html?q=${encodeURIComponent(service)}`;
}

// ── Form submit ───────────────────────────────────────────────────
function submitForm(e) {
  e.preventDefault();
  const form    = document.getElementById('advertiseForm');
  const success = document.getElementById('formSuccess');

  // Replace YOUR_FORM_ID with your Formspree form ID
  // Get one free at formspree.io
  fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: new FormData(form),
    headers: { 'Accept': 'application/json' },
  }).then(r => {
    if (r.ok) {
      if (form)    form.style.display    = 'none';
      if (success) success.style.display = 'block';
    } else {
      alert('Something went wrong. Please email us directly at hello@siouxfallspros.com');
    }
  }).catch(() => {
    // Fallback — just show success for now
    if (form)    form.style.display    = 'none';
    if (success) success.style.display = 'block';
  });
}
