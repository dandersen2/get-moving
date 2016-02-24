'use strict';
import React, {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#024959',
  },
  contentContainer: {
    paddingVertical: 20,
    justifyContent: 'center',
  },
  introContainer: {
    // backgroundColor: '#024959',
    // flex: 1,
    justifyContent: 'center',
  },
  intro: {
    alignItems: 'center',
    backgroundColor: '#80D6CF',
    borderColor: '#F2EFDC',
    borderWidth: 10,
    borderRadius: 10,
    textAlign: 'center',
    margin: 10,
    width: 200,
    height: 200,
    padding: 10,
    fontFamily: 'Avenir-Book',
    left: 100,
    fontWeight: 'bold',
  },
  signin: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    left: 175,
  },
  eventsContainer: {
    justifyContent: 'center',
    // backgroundColor: '#024959',
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
    // position: 'absolute',
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
