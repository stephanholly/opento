import React from 'react';
import {TouchableOpacity,Text,Image, View, Button, StyleSheet, TextInput} from 'react-native';
import { connect } from 'react-redux';

class MyEvents extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>My Events</Text>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%'
  },
  profilePic: {
    borderRadius: 50,
  },

});



export default connect(null, null)(MyEvents);
