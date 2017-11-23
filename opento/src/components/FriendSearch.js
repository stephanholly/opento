import React from 'react';
import {TouchableOpacity,Text,Image, View, Button, StyleSheet, TextInput} from 'react-native';
import { connect } from 'react-redux';

class FriendSearch extends React.Component {

  render() {
    return (
      <View style={styles.container}>
      <TextInput
        style={styles.searchBox}
        autoCorrect={false}
        placeholder="Search"
        />
      <TouchableOpacity style={styles.button} >
        <Button style={styles.button}  onPress={null} color="#FFFFFF" title="Enter"/>
      </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  searchBox: {
    backgroundColor: 'white',
    margin: 3,
    width: '82%'
  },
});



export default connect(null, null)(FriendSearch);
