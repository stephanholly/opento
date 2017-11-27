import React from 'react';
import {TouchableOpacity,Text,Image, View, Button, StyleSheet, TextInput} from 'react-native';
import { connect } from 'react-redux';


class SingleMyEventsItem extends React.Component {

  render() {
    let picture = this.props.picurl
    return (
      <View style={styles.container}>
        <View style={styles.green}></View>
        <View style={styles.rows}>
          <Text style={styles.username}>Current</Text>
          <Text style={styles.location}>{this.props.location}</Text>
        </View>
        <View style={styles.handandclick}>
          <Text style={styles.clicks}>{this.props.clicks}</Text>
          <Image style={styles.clickImage} source={require('../images/clicks.png')}/>
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
    borderBottomColor: '#2D9CDB',
    justifyContent: "space-between"
  },
  green: {
    borderRadius: 25,
    height: 60,
    width: 60,
    padding: 5,
    margin: 10,
    backgroundColor: 'green'
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
  textAlign: 'center'
  },
  clickImage: {
    height: 18,
    width: 18,
    marginTop: 10,
    marginRight: 8
  },
  clicked: {
    height: 12,
    width: 12,
    marginTop: 0,
    marginLeft: 20
  },
  clicks: {
    fontSize: 15,
    padding: 10,
    paddingRight: 3,
    color: 'white',
  },
  handandclick: {
    flexDirection: 'row'
  },
});



export default connect(null, null)(SingleMyEventsItem);
