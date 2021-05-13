function onLocationFound(e) {
	var radius = e.accuracy / 2;
	L.marker(e.latlng).addTo(mymap)
		.bindPopup("Esta es su ubicación")//.openPopup();
    L.circle(e.latlng, radius).addTo(mymap);
    //mymap.setView(e.latlng, 8);
}

function onLocationError(e) {
	//alert(e.message);
}

function callMap() {
    
    //MapBox
    L.tileLayer(
        'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZmF1MTI5OCIsImEiOiJja20yZ3d4bjQxNG05MnVyM2RnM3ljbHlyIn0.lh539RJvcX-e99_yxawaLw', {
            maxZoom: 18,
		    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
			    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		    id: 'mapbox/satellite-streets-v11',
		    tileSize: 512,
		    zoomOffset: -1
        }
    ).addTo(mymap);

    var siwakabata = L.marker([9.584889653459406, -82.92993982900403]).addTo(mymap);
    siwakabata.bindPopup("<b>Finca Agroecológica Siwakabata, Limón</b>");

    var koswak = L.marker([9.514232225752258, -82.94821899958032]).addTo(mymap);
    koswak.bindPopup("<b> <a href='koswakusure.html'> Koswak Úsure </a> </b>");
    
    var shuabb = L.marker([9.537590882501654, -82.87343439441216]).addTo(mymap);
    shuabb.bindPopup("<b> <a href='shuabb.html'> Albergue Indígena de Alojamiento Shuabb </a> </b>");
}

function returnInit() {
    window.location.href = "index.html";
}

function mapForPlaces(num1, num2, name) {
    //MapBox
    L.tileLayer(
        'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZmF1MTI5OCIsImEiOiJja20yZ3d4bjQxNG05MnVyM2RnM3ljbHlyIn0.lh539RJvcX-e99_yxawaLw', {
            maxZoom: 18,
		    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
			    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		    id: 'mapbox/satellite-streets-v11',
		    tileSize: 512,
		    zoomOffset: -1
        }
    ).addTo(mymap);
    var icon = L.icon({
        iconUrl: './img/Logo/koswakusureIcon.png',
        iconSize:     [38, 66.161], // size of the icon
        iconAnchor:   [22, 65.161], // point of the icon which will correspond to marker's location
        popupAnchor:  [-3, -66] // point from which the popup should open relative to the iconAnchor
    });
    var place = L.marker([num1, num2] /*, {icon: icon}*/).addTo(mymap);
    place.bindPopup("<b> Aquí está " + name + "</b>");

    mymap.setView([num1, num2], 8);
    mymap.invalidateSize();
}

function secondMap() { 
    //OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(mymap);

    //MapBox
    L.tileLayer(
        'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZmF1MTI5OCIsImEiOiJja20yZ3d4bjQxNG05MnVyM2RnM3ljbHlyIn0.lh539RJvcX-e99_yxawaLw', {
            maxZoom: 18,
		    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
			    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		    id: 'mapbox/satellite-streets-v11',
		    tileSize: 512,
		    zoomOffset: -1
        }
    ).addTo(mymap);

    //Watercolor
    L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	    subdomains: 'abcd',
	    minZoom: 1,
	    maxZoom: 16,
	    ext: 'jpg'
    }).addTo(mymap);
}