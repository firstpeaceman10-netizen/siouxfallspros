let map, service, markers = [], infoWindow;

function initMap() {
  const siouxFalls = { lat: 43.5446, lng: -96.7311 };
  map = new google.maps.Map(document.getElementById('map'), {
    center: siouxFalls, zoom: 12,
    styles: [
      { featureType:'poi', elementType:'labels', stylers:[{visibility:'off'}] },
      { featureType:'water', stylers:[{color:'#a5d3e8'}] },
      { featureType:'landscape', stylers:[{color:'#f0f4f0'}] },
    ],
    mapTypeControl: false, streetViewControl: false,
  });
  service    = new google.maps.places.PlacesService(map);
  infoWindow = new google.maps.InfoWindow();
}

function findNearbyPros() {
  const address  = document.getElementById('mapAddressInput')?.value;
  const category = document.getElementById('mapCategorySelect')?.value || 'all';
  if (!address) { alert('Please enter your address first'); return; }

  const geocoder = new google.maps.Geocoder();
  geocoder.geocode({ address: address + ', Sioux Falls, SD' }, (results, status) => {
    if (status === 'OK') {
      const location = results[0].geometry.location;
      map.setCenter(location); map.setZoom(13);
      new google.maps.Marker({
        position: location, map,
        icon: { path: google.maps.SymbolPath.CIRCLE, scale: 10, fillColor:'#1565C0', fillOpacity:1, strokeColor:'white', strokeWeight:3 },
        title: 'Your Location', zIndex: 999,
      });
      searchNearby(location, category);
    } else {
      alert('Could not find that address. Try: 123 Main St, Sioux Falls');
    }
  });
}

function searchNearby(location, category) {
  clearMarkers();
  const types = { plumber:'plumber', electrician:'electrician', hvac:'general_contractor', dentist:'dentist', mechanic:'car_repair', restaurant:'restaurant', lawyer:'lawyer', 'hair salon':'beauty_salon', 'garage door':'general_contractor', roofer:'roofing_contractor', painter:'painter', all:'establishment' };
  service.nearbySearch({ location, radius: 8000, keyword: category === 'all' ? 'local services' : category, type: types[category] || 'establishment' }, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      const filtered = results.filter(p => !p.rating || p.rating >= 3.0).sort((a,b) => (b.rating||0)-(a.rating||0)).slice(0,20);
      displayMapResults(filtered, location);
    } else {
      document.getElementById('mapResults').innerHTML = `<div class="map-results-placeholder"><div style="font-size:48px;margin-bottom:16px">😕</div><h3>No results found</h3><p>Try a different category or address</p></div>`;
    }
  });
}

function displayMapResults(places, userLocation) {
  const resultsDiv = document.getElementById('mapResults');
  resultsDiv.innerHTML = '';
  if (!places.length) { resultsDiv.innerHTML = `<div class="map-results-placeholder"><div style="font-size:48px;margin-bottom:16px">🔍</div><h3>No results nearby</h3><p>Try a different category</p></div>`; return; }

  places.forEach((place, i) => {
    const rating = place.rating || 0;
    const reviews = place.user_ratings_total || 0;
    const stars = renderStars(rating);
    const isPremium = rating >= 4.5;
    const badge = isPremium ? '<span class="map-rating-badge premium">⭐ 4.5+</span>' : rating >= 3.0 ? '<span class="map-rating-badge standard">✓ Listed</span>' : '';

    const card = document.createElement('div');
    card.className = 'map-result-card';
    card.innerHTML = `
      <div class="map-result-name">${i+1}. ${place.name}</div>
      <div class="map-result-rating">
        <span class="map-result-stars">${stars}</span>
        <span class="map-result-rating-num">${rating ? rating.toFixed(1) : 'No rating'}</span>
        ${reviews ? `<span class="map-result-reviews">(${reviews})</span>` : ''}
        ${badge}
      </div>
      <div class="map-result-address">${place.vicinity||''}</div>
      ${place.opening_hours?.open_now !== undefined ? `<div style="font-size:12px;margin-bottom:8px;color:${place.opening_hours.open_now?'#2E7D32':'#C62828'};font-weight:600">${place.opening_hours.open_now?'✅ Open now':'❌ Closed'}</div>` : ''}
      <a href="tel:" class="map-result-call">📞 Call</a>`;
    card.addEventListener('click', () => { map.panTo(place.geometry.location); map.setZoom(15); });
    resultsDiv.appendChild(card);

    const marker = new google.maps.Marker({
      position: place.geometry.location, map,
      title: place.name,
      label: { text: String(i+1), color:'white', fontWeight:'bold', fontSize:'12px' },
      icon: { path: google.maps.SymbolPath.CIRCLE, scale:16, fillColor: isPremium?'#F9A825':'#1565C0', fillOpacity:1, strokeColor:'white', strokeWeight:2 },
    });
    marker.addListener('click', () => {
      infoWindow.setContent(`<div style="font-family:Inter,sans-serif;padding:4px;max-width:200px"><strong>${place.name}</strong>${rating?`<div style="color:#F9A825">${stars} ${rating.toFixed(1)}</div>`:''}<div style="font-size:12px;color:#666">${place.vicinity||''}</div></div>`);
      infoWindow.open(map, marker);
    });
    markers.push(marker);
  });
}

function renderStars(r) {
  if (!r) return '☆☆☆☆☆';
  return '★'.repeat(Math.floor(r)) + (r%1>=0.5?'½':'') + '☆'.repeat(5-Math.floor(r)-(r%1>=0.5?1:0));
}

function clearMarkers() { markers.forEach(m => m.setMap(null)); markers = []; }

window.initMap = initMap;

function searchNearbyOnListingPage() {
  const address  = document.getElementById('listingAddressInput')?.value;
  const category = document.getElementById('listingCategory')?.value || '';
  if (!address) { alert('Please enter your address'); return; }

  const geocoder = new google.maps.Geocoder();
  geocoder.geocode({ address: address + ', Sioux Falls, SD' }, (results, status) => {
    if (status === 'OK') {
      const location = results[0].geometry.location;
      service.nearbySearch({ location, radius:10000, keyword: category }, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          const filtered = results.filter(p => !p.rating||p.rating>=3.0).sort((a,b)=>(b.rating||0)-(a.rating||0)).slice(0,15);
          displayNearbyListings(filtered);
        }
      });
    }
  });
}

function displayNearbyListings(places) {
  const container = document.getElementById('nearbyResults');
  if (!container) return;
  container.innerHTML = `<div class="nearby-results-title">📍 Pros Near Your Address</div>`;
  places.forEach((place, i) => {
    const rating = place.rating || 0;
    const isPremium = rating >= 4.5;
    const div = document.createElement('div');
    div.className = `biz-card ${isPremium?'featured':''}`;
    div.innerHTML = `
      <div class="biz-logo">${isPremium?'⭐':'📍'}</div>
      <div class="biz-info">
        <div class="biz-top">
          <div class="biz-name">${place.name}</div>
          ${isPremium?'<span class="featured-badge">⭐ 4.5+ Rated</span>':''}
        </div>
        ${rating?`<div class="biz-rating"><span class="stars">${renderStars(rating)}</span><span class="rating-num">${rating.toFixed(1)}</span>${place.user_ratings_total?`<span class="review-count">(${place.user_ratings_total})</span>`:''}</div>`:''}
        <div class="biz-desc">${place.vicinity||'Sioux Falls, SD'}</div>
        <div class="biz-actions"><a href="tel:" class="btn-call">📞 Call</a></div>
      </div>`;
    container.appendChild(div);
  });
}
