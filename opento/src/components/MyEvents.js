import React from 'react'
import {TouchableOpacity,Text,Image, View, Button, StyleSheet, ScrollView, TextInput} from 'react-native';
import SingleMyEventsItem from './SingleMyEventsItem'
import SingleFriendRequest from './SingleFriendRequest'


const MyEvents = ({getMyEvents, pendingFRInfo}) => {

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

    let theMyFR = pendingFRInfo.map((fr, idx) => <SingleFriendRequest
        key={idx}
        id={fr.friendid1}
        username={ fr.username }
        picurl={fr.picurl}
        show={true}
      />)


    return (

      <ScrollView style={styles.container}>
          {theMyFR}
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
