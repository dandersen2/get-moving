##Get Moving!

Get Moving is a mobile(iOS) app that will remind you when you need to leave for any appointment or event in your Google Calendar based on your current location, the event location, and real-time traffic conditions. The front-end of the app that lives on the user's phone was built in React Native while the back end is a rails app that ran from a Digital Ocean server. Using Google Calendar's API we were able to access a user's list of events once they have logged into the app using Google Omni-auth:

***
![google-auth-screenshot](https://github.com/dandersen2/get-moving/blob/master/google-omni-auth-screenshot.png "Screenshot")
######Demo using https://www.npmjs.com/package/react-native-google-signin to provide a "login with Google" button.
######Demo then uses the bearer token returned above to call the calendar API.
***

Once the event list is accessed, the app retrieves geo-location data from the phone as well as the location of the event in the calendar. These coordinates are used to make a Google Maps API request that will return the travel-time between these two points factoring in the current traffic information. Currently, the time calculations are made based on predicted travel times in a car only but we would like to add a selector in the app preferences that would allow you to choose between pedestrian, cyclist, bus, and train modes of transport which would only require a small change in the API request as Google already has data for these modes available.

The rails app runs on an independent server which runs a scheduled rake task. The rake task checks the next calendar event every 10 minutes to see if the user needs to leave yet by comparing the travel-time with the current time and the event start-time. If the rake task determines that the user needs to leave for their upcoming event in the next 10 minutes based on this calculation, a push-notification is sent through Apple's servers to the user's phone to alert them. This allows for the Get Moving! reminders to work even if the app is not currently open or if the phone is asleep.

***
Data used by the app shown here on the rails server in a simple printout used for development and testing:
![rails-server](https://github.com/dandersen2/get-moving/blob/master/app-event-data3.png "Server")
***

Get Moving was a three-person final project for the final phase of [Dev Bootcamp](http://devbootcamp.com/) in NYC. The entire project and presentation was completed in 8 days and we had no prior experience with React Native when we began.

[App presentation on Youtube](https://youtu.be/fg7B2T1fUbI?t=21m19s)
