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

  getPosition = async() => {
     
    let app = this;

    navigator.geolocation.getCurrentPosition(position => {
      
            app.position = position;
        
            if(app.position !== undefined)
            {
                const { latitude, longitude, ...rest } =  app.position.coords;

                app.latitude  = latitude;
                app.longitude = longitude;

                if(latitude !== undefined)
                {
                componentMaps.src =  'https://maps.google.com/maps?q=' + 
                                      latitude + ',' + 
                                      longitude + 
                                      '&t=&z=20&ie=UTF8&iwloc=&output=embed';
                document.getElementById('detail-location').innerHTML = `Latitude: ${latitude} Longitude: ${longitude}`;
            }
          }
    });

 }

}

const viewModel = new viewLocation();



function getLocation(){
   viewModel.getPosition();
}




   