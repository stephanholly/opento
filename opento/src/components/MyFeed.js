import React from 'react'
import {TouchableOpacity,Text,Image, View, Button, StyleSheet, ScrollView, TextInput} from 'react-native';
import SingleFeedItem from './SingleFeedItem'


const MyFeed = ({getFeed}) => {

  let theFeed = getFeed.map((feed, idx) => <SingleFeedItem
      key={idx}
      id={feed.id}
      username={ feed.eventcreatorname }
      clicks={ feed.clicks }
      active={ feed.active}
      clicked={ feed.clicked }
      location={feed.location}
      picurl={feed.creatorpic}
    />)


    return (

      <ScrollView style={styles.container}>
          {theFeed}
      </ScrollView>
    )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },

});

export default MyFeed;
