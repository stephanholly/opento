import React from 'react'
import {TouchableOpacity,Text,Image, View, Button, StyleSheet, ScrollView, TextInput} from 'react-native';
import SingleMyEventsItem from './SingleMyEventsItem'


const MyEvents = ({getMyEvents}) => {

  let theMyEvents = getMyEvents.map((event, idx) => <SingleMyEventsItem
      key={idx}
      id={event.id}
      username={ event.eventcreatorname }
      clicks={ event.clicks }
      active={ event.active}
      clicked={ event.clicked }
      location={event.location}
      picurl={event.creatorpic}
    />)


    return (

      <ScrollView style={styles.container}>
          {theMyEvents}
      </ScrollView>
    )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#79CAE4',
  },

});

export default MyEvents;
