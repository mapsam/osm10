function init() {
  var info = document.getElementById('info');
  var rack = document.getElementById('rack-count');

	var map = L.map('map').setView([47.650125, -122.350960], 16);
	L.tileLayer('http://{s}.tiles.mapbox.com/v3/examples.map-i86nkdio/{z}/{x}/{y}.png').addTo(map);

	L.geoJson(geojson, {
    onEachFeature: onEachFeature,
    pointToLayer: function(feature, latlng) {
      return new L.CircleMarker(latlng, {
        radius: 3,
        fillOpacity: 0.8,
        color: '#222',
        className: 'bike-point'
      });
    }
  }).addTo(map);

  function onEachFeature(feature, layer) {
    if(feature.properties && feature.properties.capacity){
      var point = feature.properties;
      layer.on('mouseover', function(){
        rack.innerHTML=point.capacity;
      });
      layer.on('mouseout', function(){
        rack.innerHTML=' -';
      });
    }
    
  }

}

window.onLoad = init();