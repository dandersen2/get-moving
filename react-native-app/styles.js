'use strict';
import React, {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  contentContainer: {
    paddingVertical: 20,
    justifyContent: 'center',
  },
  introContainer: {
    justifyContent: 'center',
    backgroundColor: '#80D6CF',
    borderColor: '#F2EFDC',
    borderWidth: 10,
    borderRadius: 10,
    margin: 10,
    width: 300,
    height: 170,
    padding: 10,
    left: 25,
    top: 200
  },
  intro: {
    alignItems: 'center',
    fontFamily: 'Avenir-Book',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5,
  },
  signin: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    left: 105,
  },
  eventsContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  eventContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#80D6CF',
    borderColor: '#F2EFDC',
    borderWidth: 10,
    borderRadius: 10,
    margin: 10,
  },
  rightContainer: {
    flex: 1,
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontFamily: 'Avenir-Book',
  },
  thumbnail: {
    width: 40,
    height: 40,
  },
  contentContainer: {
    paddingVertical: 20,
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
    fontFamily: 'Avenir-Book',
  },
  time: {
    fontFamily: 'Avenir-Book',
  },
  bold: {
    fontFamily: 'Avenir-Book',
    fontWeight: 'bold',
  },
  location: {
    fontFamily: 'Avenir-Book',
  },
  toolbar:{
    backgroundColor:'#EB4D41',
    paddingTop:25,
    height: 50,
    flexDirection:'row',
    top: 0
  },
  toolbarGreeting:{
    width: 10,
    color:'#fff',
    textAlign:'center',
    flex: 1,
  },
  signout: {
    color:'#fff',
    fontWeight:'bold',
    flex:1,
    marginRight: 10
  }
});
