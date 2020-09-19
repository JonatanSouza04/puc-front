function helloWorld() {
  for (let i = 3; i > 0; i-- ) {
  console.log(i);
  }
  console.log('...');
  console.log('Hello World!');
 }
 
helloWorld();

var componentMaps = document.getElementById("location");


class viewLocation {
    
  constructor() {
    this.position  = undefined;
    this.latitude  = 0.0;
    this.longitude = 0.0;
  }

getLocationCurrency = async() => {
  if (navigator.geolocation) 
     return new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject))
  else 
    return new Promise(resolve => resolve({}));    
}


getPosition = async() => {
   
    let position = await this.getLocationCurrency();
    
    this.position = position;

    if(this.position !== undefined)
    {
        const { latitude, longitude, ...rest } =  this.position.coords;

        this.latitude  = latitude;
        this.longitude = longitude;

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

}


const viewModel = new viewLocation();

function getLocation(){
  viewModel.getPosition();
}
