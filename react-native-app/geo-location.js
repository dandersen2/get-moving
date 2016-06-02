class BackgroundGeo {
  constructor(component){
    var BackgroundGeolocation = require('react-native-background-geolocation');
    BackgroundGeolocation.configure({
      desiredAccuracy: 0,
      stationaryRadius: 50,
      distanceFilter: 50,
      disableElasticity: false, // <-- [iOS] Default is 'false'.  Set true to disable speed-based distanceFilter elasticity
      locationUpdateInterval: 5000,
      minimumActivityRecognitionConfidence: 80,   // 0-100%.  Minimum activity-confidence for a state-change
      fastestLocationUpdateInterval: 5000,
      activityRecognitionInterval: 10000,
      stopDetectionDelay: 1,  // <--  minutes to delay after motion stops before engaging stop-detection system
      stopTimeout: 2, // 2 minutes
      activityType: 'AutomotiveNavigation',

      // Application config
      debug: true, // <-- enable this hear sounds for background-geolocation life-cycle.

      // HTTP / SQLite config
      // url: 'http://posttestserver.com/post.php?dump&dir=sc-fr-b-geoloc',
      batchSync: false,       // <-- [Default: false] Set true to sync locations to server in a single HTTP request.
      autoSync: false,         // <-- [Default: true] Set true to sync each location to server as it arrives.
      maxDaysToPersist: 1
    });

    // This handler fires whenever bgGeo receives a location update.
      BackgroundGeolocation.on('location', (location) => {
        console.log('- [js]location: ', JSON.stringify(location));
        component.setLocation(location.coords.latitude, location.coords.longitude)

        console.log('lng', location.coords.longitude)

      });

      // This handler fires whenever bgGeo receives an error
      BackgroundGeolocation.on('error', (error) => {
        var type = error.type;
        var code = error.code;
        console.log(type + " Error: " + code);
      });

      // This handler fires when movement states changes (stationary->moving; moving->stationary)
      BackgroundGeolocation.on('motionchange', (location) => {
          console.log('- [js]motionchanged: ', JSON.stringify(location));
      });

      BackgroundGeolocation.on('httpresponse', (event) => {
        console.log('- HttpResponse: ', JSON.stringify(event));
      });

      BackgroundGeolocation.start(() => {
        console.log('- [js] BackgroundGeolocation started successfully');

        // Fetch current position
        BackgroundGeolocation.getCurrentPosition({timeout: 30}, (location) => {
          console.log('- [js] BackgroundGeolocation received current position: ', JSON.stringify(location));
        }, function(error) {
          console.log("Location error: " + error);
        });
      });

  }
}

export default BackgroundGeo
