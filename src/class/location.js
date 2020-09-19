class viewLocation {
      
    constructor() {
        this.position  = undefined;
        this.latitude  = 0.0;
        this.longitude = 0.0;
    }
  
  static async getLocationCurrency() {
        if (navigator.geolocation) 
           return new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject))
        else 
          return new Promise(resolve => resolve({}));    
      }
      
  
  static async getPosition() {
     
      let position = await this.getLocationCurrency();
      
      this.position = position;
  
      if(this.position !== undefined)
      {
          const { latitude, longitude } =  this.position.coords;
  
          this.latitude  = latitude;
          this.longitude = longitude;
  
          if(latitude !== undefined)
          {
       
          var componentMaps = document.getElementById("location");
          componentMaps.src =  'https://maps.google.com/maps?q=' + 
                                latitude + ',' + 
                                longitude + 
                                '&t=&z=20&ie=UTF8&iwloc=&output=embed';
          document.getElementById('detail-location').innerHTML = `Latitude: ${latitude} Longitude: ${longitude}`;
      }
    }
  
   }
  
  }

  export default viewLocation;