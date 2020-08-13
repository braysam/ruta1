var map = L.map('map-template').setView([7.8953, -72.4913], 13);

L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png').addTo(map);


  
map.locate({setView: true, maxZoom: 18});

function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(map)
        .bindPopup("Estas aqui").openPopup();

        var latlngs = [
            [ // first polygon
              [[7.90320,-72.46807],[7.90449,-72.46789]], // outer ring
              [[7.90329,-72.46891],[7.90463,-72.46870]], // hole
            
            ]
            
        ];
        var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);
        // zoom the map to the polyline
        map.fitBounds(polyline.getBounds());

    
}

map.on('locationfound', onLocationFound);


