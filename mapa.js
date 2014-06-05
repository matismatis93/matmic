window.onload = function () {
    
   var map = L.map('map').setView([54.396, 18.57], 16);

   L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

    for (var i = 1; i < localStorage.length; i=i+2) {
    console.log(localStorage.getItem(i)+" "+localStorage.getItem(i+1));
    L.marker([localStorage.getItem(i),localStorage.getItem(i+1)]).bindPopup("Numer: " + (i+1)/2).addTo(map);
    }

    function onMapClick(e) {
    localStorage.setItem(localStorage.length+1, e.latlng.lat);
    localStorage.setItem(localStorage.length+1, e.latlng.lng);
    console.log(localStorage.getItem(localStorage.length-1));
    console.log(localStorage.getItem(localStorage.length));
    location.reload();
    }

    map.on('click', onMapClick);


   L.marker([54.378882, 18.506628]).addTo(map).bindPopup("Tutaj mieszkam").openPopup();

	

  L.marker([54.38084,18.469412]).addTo(map).bindPopup("Port Lotniczy").openPopup();
  L.marker([54.381354,18.604748]).addTo(map).bindPopup("Wrzeszcz PKP").openPopup();
  L.polyline([
    [54.380855, 18.469493],
    [54.381553, 18.470035],
    [54.381375, 18.471228],
    [54.380660, 18.480641],
    [54.379697, 18.483087],
    [54.376213, 18.511181],
    [54.376034, 18.514137],
    [54.376431, 18.518244],
    [54.376136, 18.522155],
    [54.375525, 18.521318],
    [54.375213, 18.521762],
    [54.373212, 18.522411],
    [54.371268, 18.521885],
    [54.371058, 18.521672],
    [54.371008, 18.522001],
    [54.371292, 18.521915],
    
    ]).addTo(map);
  
L.polyline([
    
    [54.375525, 18.521318],
    [54.376107, 18.522455],
    [54.376332, 18.531845],
    [54.374483, 18.539348],
    [54.372355, 18.542449],
    [54.372328, 18.547367],
    [54.372024, 18.549303],
    [54.372297, 18.552300],
    [54.370112, 18.558882],
    [54.373396, 18.566885],
    [54.377701, 18.573281],
    [54.378272, 18.584280],
    [54.379371, 18.589430],
    [54.380676, 18.591074],
    [54.382150, 18.597960],
    [54.382150, 18.597960],
    [54.383276, 18.599152],
    [54.383678, 18.600200],
    [54.380930, 18.606433],
    ]).addTo(map);
  }


 
