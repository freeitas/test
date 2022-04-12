const mainMap = document.getElementById('map')
const londrina = [-23.2927, -51.1732]
const map = L.map(mainMap, {
  center: londrina,
  zoom: 12
});
const baseMap = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png',{});
baseMap.addTo(map);

//loop through localstorage and set the markers
const keys = Object.keys(localStorage);
for (let key of keys) {
  const { name, lat, lon } = JSON.parse(localStorage.getItem(key));
  let  geojsonFeature = {
    "type": "Feature",
    "properties": {},
    "geometry": {
        "type": "Point",
        "coordinates": [lon, lat]
    }
  };

  L.geoJSON(geojsonFeature).bindPopup(name).addTo(map);
}