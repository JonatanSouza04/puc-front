function helloWorld() {
    for (let i = 3; i > 0; i-- ) {
    console.log(i);
    }
    console.log('...');
    console.log('Hello World!');
   }
   
helloWorld();

var componentMaps = document.getElementById("location");

function getLocation() {
    if (navigator.geolocation) 
    navigator.geolocation.getCurrentPosition(viewLocation) 
}

function viewLocation(position) {

  if(position.coords.latitude !== undefined)
  {
   componentMaps.src = 'https://maps.google.com/maps?q=' + 
                       position.coords.latitude + ',' + 
                       position.coords.longitude + 
                       '&t=&z=20&ie=UTF8&iwloc=&output=embed';

                       
   var componentDisplay = document.getElementById("location-display");
   componentDisplay.style.display = 'block';

   document.getElementById('detail-location').innerHTML = 'Latitude: ' + position.coords.latitude + '  -  Longitude: ' + position.coords.longitude; 
  }
}

   