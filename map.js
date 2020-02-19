var map = L.map('map',{
center: [51.50, 0],
zoom: 10
});

var Hydda_Full = L.tileLayer('https://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var style = {
          "color": "blue",
          "weight": 2,
          "opacity": 1,
          "fillColor": "blue",
          "fillOpacity": 1
      };

      function onEachFeature1(feature, layer) {
        layer.bindTooltip('</h1>' + feature.properties.Name + '</h1>');
        layer.on('mouseover', function() {
          layer.openPopup();
        });
        layer.on('mouseout', function() {
          layer.closePopup();
        })
      }

var geojsonLayer1 = new L.GeoJSON.AJAX("https://raw.githubusercontent.com/ThamesEstuaryPartnership/ytt/master/rivers.geojson",{
  style: style,
  onEachFeature:onEachFeature1}).addTo(map);

  function onEachFeature2(feature, layer) {
    layer.bindTooltip('</h1>' + feature.properties.Name + '</h1>');
    layer.on('mouseover', function() {
      layer.openPopup();
    });
    layer.on('mouseout', function() {
      layer.closePopup();
    })
  }

var geojsonLayer2 = new L.GeoJSON.AJAX("https://raw.githubusercontent.com/ThamesEstuaryPartnership/ytt/master/thames.geojson", {
  style: style,
  onEachFeature:onEachFeature2}).addTo(map);

var scale = L.control.scale({position: 'bottomright'});
scale.addTo(map);
