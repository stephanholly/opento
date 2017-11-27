import React from 'react'
import {TouchableOpacity,Text,Image, View, Button, StyleSheet, ScrollView, TextInput} from 'react-native';
import IndFriendList from './IndFriendList'


const AllUsers = ({users, filterPhrase}) => {

  let theUsers = users.filter(user => {
    if(!filterPhrase.length){
      return true;
    } else {
      return user.username.includes(filterPhrase)
    }
  })
  .sort((a,b) => {
    if(a > b) {
      return 1;
    } else if(a < b) {
      return -1;
    } else {
      return 0;
    }
  })
  .map((user, idx) => <IndFriendList
      key={idx}
      id={user.id}
      username={ user.username }
      firstname={ user.firstname }
      lastname={ user.lastname}
      picurl={ user.picurl }
      uid={user.uid}
    />)


    return (

      <ScrollView style={styles.container}>
          {theUsers}
      </ScrollView>
    )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#79CAE4',
  },

});

export default AllUsers;
