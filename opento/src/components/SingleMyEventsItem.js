import React from 'react';
import {TouchableOpacity,Text,Image, View, Button, StyleSheet, TextInput} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as getMyEventsActions from '../actions/getMyEvents'

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
        <View style={styles.rightcolumn}>
          <View style={styles.handandclick}>
            <Text style={styles.clicks}>{this.props.clicks}</Text>
            <Image style={styles.clickImage} source={require('../images/clicks.png')}/>
          </View>
          <TouchableOpacity style={styles.ex} onPress={() => {
              this.props.getMyEventsActions.deleteMyEvent(this.props.id)
            }}>
            <Text style={styles.x}>X</Text>
          </TouchableOpacity>
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
  rightcolumn: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  ex: {
    height: 15,
    width: 15,
    backgroundColor: '#2D9CDB',
    marginLeft: 17,
    marginBottom: 15,
    paddingBottom: 8,
    borderRadius: 8
  },
  x: {
    color: 'white',
    paddingLeft: 3
  },
  handandclick: {
    flexDirection: 'row'
  },
});

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMyEventsActions: bindActionCreators(getMyEventsActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleMyEventsItem);
