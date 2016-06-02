"use strict";

import BackgroundGeo from './geo-location';

import React, {
  AlertIOS,
  AppRegistry,
  Component,
  Image,
  PushNotificationIOS,
  StyleSheet,
  ScrollView,
  Text,
  View,
  NavigatorIOS,
  TouchableHighlight,
} from 'react-native';

import EventListView from './EventListView'
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
const styles= require('./styles');

class DiaryList extends Component {
  constructor() {
      super();
      this.state = {
          allEvents: [],
          onEvents: [],
          user: null,
          nextEventCoordinates: [],
          nextEvent: null,
          currentCoordinates: [],
          durationToNextEvent: null,
      };
      new BackgroundGeo(this);
      PushNotificationIOS.addEventListener('notification', this.onNotification);
      PushNotificationIOS.addEventListener('register', this.storeDeviceToken.bind(this));

      setInterval(() => {
          this.doMainCheckLoop()
      }, 5000)

  GoogleSignin.configure({
      iosClientId: "430891231916-hej7na4spktej6ofjofis7gphtlg5op3.apps.googleusercontent.com",
      scopes: ["https://www.googleapis.com/auth/calendar"]
    });
  }

  storeDeviceToken(token) {
    this.setState({deviceToken: token});
  }

  onNotification(notification) {
    console.log(arguments)
    AlertIOS.alert(
      'Notification Received',
      'Alert message: ' + notification.getMessage(),
      [{
        text: 'Dismiss',
        onPress: null,
      }]
    );
  }

  signIn() {
    GoogleSignin.signIn()
      .then((user) => {
        console.log(user);
        this.setState({user: user});
        this.loadEventsFromCalendar();
      })
      .catch((err) => {
        console.log('WRONG SIGNIN', err);
      })
      .done();
  }

  signOut() {
    GoogleSignin.signOut()
      .then(() => {
        console.log('out');
        this.setState({user: null});
      })
      .catch((err) => {
      });
  }

  loadEventsFromCalendar() {
    return fetch("https://www.googleapis.com/calendar/v3/calendars/primary/events", {
      headers: {
        "Authorization": "Bearer " + this.state.user.accessToken
      }
    })
      .then((response) => response.json())
      .then((json) => {
        var futureEvents = json.items.filter((event) => new Date(event.start.dateTime) > new Date()).sort(
            function (a,b) {
              if (new Date(a.start.dateTime) < new Date(b.start.dateTime))
                return -1;
              else if (new Date(a.start.dateTime) > new Date(b.start.dateTime))
                return 1;
              else
                return 0;
            }
          );
        this.setState({
          allEvents: futureEvents,
          nextEvent: futureEvents.filter(function(event) {return event.extendedProperties && event.extendedProperties.private && event.extendedProperties.private.reminder == "true"})[0]
         });
      })
  }

  addressToCoordinates(address) {
    var formattedAddress = address.replace(/ /g,"+")
    formattedAddress = address.replace(/&/g,"%26")
    var url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + formattedAddress + "&key=AIzaSyCCyBbVWsgVD7NQmDXcwF7w0GKbL00SiUA"
    return fetch(url)
      .then((response) => response.json())
      .then((json) => {
        this.setState({nextEventCoordinates: [json.results['0'].geometry.location.lat, json.results['0'].geometry.location.lng]} )
      })
  }

  doMainCheckLoop() {
    console.log('app props', this.appProperties)
    if (this.state.user){
      this.loadEventsFromCalendar().then(() => {
        this.addressToCoordinates(this.state.nextEvent.location);
      }).then(() => {
        console.log(this.state.nextEvent)
        this.postToServer()})
    }
  };

  postToServer(){
    fetch('http://rails-on-do.com/events',
      {
        headers: {
        "Content-type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        id: this.state.nextEvent.id,
        address: this.state.nextEvent.location,
        user_email: this.state.nextEvent.creator.email,
        name: this.state.nextEvent.summary,
        event_lng: this.state.nextEventCoordinates[1],
        event_lat: this.state.nextEventCoordinates[0],
        user_lng: this.state.currentCoordinates[1],
        user_lat: this.state.currentCoordinates[0],
        start_time: new Date(this.state.nextEvent.start.dateTime),
        departure_time: new Date(new Date(this.state.nextEvent.start.dateTime).getTime() - this.state.durationToNextEvent*1000),
        device_token: this.state.deviceToken
      })
    })
    .then((response) => console.log(response)).catch(() => console.log(arguments))
    }

  setLocation(latitude, longitude) {
    this.setState({
      currentCoordinates: [latitude, longitude]
    })
  }

  reminderChange(id, value) {
    return fetch("https://www.googleapis.com/calendar/v3/calendars/primary/events/" + id, {
      method: 'PATCH',
      headers: {
        "Authorization": "Bearer " + this.state.user.accessToken,
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        "extendedProperties": {"private":{"reminder": value}}
      })
    })
      .then((response) => {
        this.loadEventsFromCalendar()
      });
  }

  render() {
    if (!this.state.user) {
      return (
          <Image source={{uri:"https://images.unsplash.com/photo-1448814100339-234df1d4005d?crop=entropy&dpr=0.90&fit=crop&fm=jpg&h=975&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=2075" }} style={{width: 450, height: 700}}>
        <View style={styles.introContainer}>
              <Text style={styles.intro}>
                Welcome to Diary List, the app that will help you never be late again! Click below to log in with your Google account.
              </Text>
              <GoogleSigninButton
                style={styles.signin}
                size={GoogleSigninButton.Size.Icon}
                color={GoogleSigninButton.Color.Dark}
                onPress={this.signIn.bind(this)}/>
        </View>
          </Image>
      )
    }
    else {
      return (
        <ScrollView style={styles.container}>
          <View style={styles.eventsContainer}>
            <Image source={{uri:"https://images.unsplash.com/photo-1448814100339-234df1d4005d?crop=entropy&dpr=0.90&fit=crop&fm=jpg&h=975&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=2075" }} >
            <EventListView
                allEvents={this.state.allEvents}
                reminderChange={this.reminderChange.bind(this)}
                signout={this.signOut.bind(this)} />
            </Image>
          </View>
        </ScrollView>
      );
    }
  }
}

AppRegistry.registerComponent('DiaryList', () => DiaryList);
