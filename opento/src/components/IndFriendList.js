import React from 'react';
import {TouchableOpacity,Text,Image, View, Button, StyleSheet,  TextInput} from 'react-native';
import { connect } from 'react-redux';


class IndFriendList extends React.Component {

  render() {
    let picture = this.props.picurl
    return (
      <View style={styles.container}>
        <Image style={styles.profilePic} source={{isStatic:true, uri: picture}}/>
        <Text style={styles.username}>{this.props.username}</Text>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#79CAE4',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'white'
  },
  profilePic: {
    borderRadius: 20,
    height: 40,
    width: 40,
    padding: 5,
    margin: 10,
  },
  username: {
    marginLeft: 25,
    color: 'white',
    fontSize: 30,
    paddingTop: 8
  }
});



export default connect(null, null)(IndFriendList);
