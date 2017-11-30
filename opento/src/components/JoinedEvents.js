import React from 'react'
import {TouchableOpacity,Text,Image, View, Button, StyleSheet, ScrollView, TextInput} from 'react-native';
import SingleActiveItem from './SingleActiveItem'


const JoinedEvents = ({getActive, navigation}) => {
  console.log("NAV: ", navigation);


  let theActive = getActive.map((active, idx) => { return (<SingleActiveItem
      key={idx}
      id={active.id}
      username={ active.eventcreatorname }
      clicks={ active.clicks }
      active={ active.active}
      clicked={ active.clicked }
      location={active.location}
      picurl={active.creatorpic}
      eventcreatorid={active.eventcreatorid}
      navigation={navigation}
    />)})


    return (

      <ScrollView style={styles.container}  >
          {theActive}
      </ScrollView>
    )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#79CAE4',
  },

});

export default JoinedEvents;
