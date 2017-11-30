import React from 'react'
import {TouchableOpacity,Text,Image, View, Button, StyleSheet, ScrollView, TextInput} from 'react-native';
import IndFriend from './IndFriend'


const AllFriends = ({friends}) => {
  let indArr = []
  let theFriends = friends.map((friend, idx) => <IndFriend
      key={idx}
      id={friend.id}
      username={ friend.username }
      firstname={ friend.firstname }
      lastname={ friend.lastname}
      picurl={ friend.picurl }
      uid={friend.uid}
      checked={false}
    />)


    return (
      <View style ={styles.container}>
      <ScrollView style={styles.container}>
          {theFriends}
      </ScrollView>
      </View>
    )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#79CAE4',
  },
});



export default AllFriends;
