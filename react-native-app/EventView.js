'use strict';
import React, {
  AppRegistry,
  Component,
  Image,
  ListView,
  StyleSheet,
  Switch,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

const styles= require('./styles');

class EventView extends Component {
  constructor() {
    super();
    this.state = {reminder: null};
  }


  reminder() {
    if (this.state.reminder == null) {
      return this.props.reminder
    }
    return this.state.reminder
  }

  render() {
    var event = this.props.event
    var reminder = this.props.reminder
    var date = new Date(this.props.event.start.dateTime);
    var formattedDate = " " + (date.getMonth() + 1) + "/" + date.getDate();
    var formattedDateWithYear = formattedDate + "/" + date.getFullYear()
    var time = date.toLocaleTimeString().replace(/(.*)\D\d+/, '$1');
    var dateAndTime = time + ", " + formattedDateWithYear;
    return (
      <View style={styles.eventContainer}>
        <View style={styles.dateContainer}>
          <Image
          source={{uri:"https://pidome.org/assets/site/images/events/default-event-image.png" }}
          style={styles.thumbnail}/>
          <Text>{formattedDate}</Text>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.name}>{event.summary}</Text>
          <Text>
            <Text style={styles.bold}>When: </Text><Text style={styles.time}> {dateAndTime}</Text>
          </Text>
          <Text>
            <Text style={styles.bold}>Where: </Text><Text style={styles.location}>{event.location}</Text>
          </Text>

        </View>
          <Switch
            onValueChange={(value) => {this.setState({reminder: value}); this.props.reminderChange(value) }}
            onTintColor="#024959"
            tintColor="#A0A1A1"
            style={{marginBottom: 10}}
            value={this.reminder()} />
      </View>
      );
  }
}

export default EventView
