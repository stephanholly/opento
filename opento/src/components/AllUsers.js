import React from 'react'
import {TouchableOpacity,Text,Image, View, Button, StyleSheet, ScrollView, TextInput} from 'react-native';
import IndFriendList from './IndFriendList'


const AllUsers = ({users}) => {

  let theUsers = users.map((induser, idx) => <IndFriendList
      key={idx}
      id={induser.id}
      username={ induser.username }
      firstname={ induser.firstname }
      lastname={ induser.lastname}
      picurl={ induser.picurl }
      uid={induser.uid}
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
