import React from 'react';
import {TouchableOpacity,Text,Image, View, Button, StyleSheet, TextInput} from 'react-native';
import { connect } from 'react-redux';


class SingleActiveItem extends React.Component {

  render() {
    let picture = this.props.picurl
    return (
      <View style={styles.container}>
        <View>
          <Image style={styles.profilePic} source={{isStatic:true, uri: picture}}/>
        </View>
        <View style={styles.rows}>
          <Text style={styles.username}>{this.props.username}</Text>
          <Text style={styles.location}>{this.props.location}</Text>
        </View>
        <View style={styles.handandclick}>

        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#79CAE4',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor:'#2D9CDB',
    justifyContent: "space-between"
  },
  profilePic: {
    borderRadius: 25,
    height: 60,
    width: 60,
    padding: 5,
    margin: 10,
  },
  username: {
    color: 'white',
    fontSize: 25,
    paddingTop: 5,
    textAlign: 'center'
  },
  location: {
    color: '#2D9CDB',
    fontSize: 15,
    paddingTop: 3,
    textAlign: 'center'
  },
  rows: {
  alignSelf: 'center',

  },
  clickImage: {
    height: 18,
    width: 18,
    marginTop: 10,
    marginRight: 8

  },
  clicks: {
    fontSize: 15,
    padding: 10,
    paddingRight: 3,
    color: 'white',
  },
  handandclick: {
    flexDirection: 'row'
  }
});



export default connect(null, null)(SingleActiveItem);
