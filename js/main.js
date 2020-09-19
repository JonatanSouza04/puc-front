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

          
     if(position !== undefined)
     {
          const { latitude, longitude } = position.coords;

          if(latitude !== undefined)
          {
          componentMaps.src =  'https://maps.google.com/maps?q=' + 
                                latitude + ',' + 
                                longitude + 
                                '&t=&z=20&ie=UTF8&iwloc=&output=embed';
          document.getElementById('detail-location').innerHTML = `Latitude: ${latitude} Longitude: ${longitude}`;
      }
    }
}

   