import React from 'react';
import {TouchableOpacity,Text,Image, View, Button, StyleSheet, TextInput} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as navActions from '../actions/navActions'

import MessageRoom from './MessageRoom'

class SingleActiveItem extends React.Component {

  render() {
    console.log("PROPS SAI: ", this.props);


    let picture = this.props.picurl

    return (
      <TouchableOpacity onPress={() => {
            this.props.navActions.getID(this.props.eventcreatorid)
              this.props.navigation.navigate('MessageRoom')
          }}>
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
      </TouchableOpacity>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderBottomWidth: 0.5,
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
    color: '#2D9CDB',
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
    color: '#2D9CDB',
  },
  handandclick: {
    flexDirection: 'row'
  }
});

const mapStateToProps = (state) => {
  return {
    user: state.user,
    user2: state.user2,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    navActions: bindActionCreators(navActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleActiveItem);
