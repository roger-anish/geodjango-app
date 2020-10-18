// introduction
var map = L.map('map').setView([28.3, 83.95], 7);
var osm= L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// adding markers
var marker = L.marker([28.3, 83.95],{
    draggable: true,
    title:" hello nepal", // shown when hovered around
    opacity: 0.7,
}).addTo(map).bindPopup("<h2>marker</h2><p>its marks location</p><img src='./images/IMG_20170929_170600.jpg'></img>")
// .openPopup();    // to open popup by default

// adding layer controller
var dark = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
});

var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});
// .addTo(map);

var baseLayers ={
    'Dark Map': dark,
    'Imagery': Esri_WorldImagery,
    'OSM': osm,
};

var polygons= L.polygon([[28,83],[28.6,83.2],[28.8,84.1],[28.1,84.2]],{
    color:'gold',
    fillColor:'pink',
    fillOpacity:'0.5',
}).addTo(map);

//overlays were here initially beacause of top to bottom approach

// geojson
var geojson= L.geoJSON(data,{
    onEachFeature: function(feature, layer){
        var name= feature.geometry.type;
        layer.bindPopup(`type: ${name}`)         //watch out its " ` " and not " ' "
    },style:{
        color:'red',
    }
}).addTo(map);
map.fitBounds(geojson.getBounds());  //automatically zooms to the geojson layer

var overLayers ={
    'points':marker,
    'polygons':polygons,
    'geojson': geojson,
};
L.control.layers(baseLayers,overLayers).addTo(map);

