
import React from 'react';
import {TouchableOpacity,Text,Image, View, Button, StyleSheet, TextInput} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as toggle from '../actions/toggle';
import * as userActions from '../actions/user'

import Available from './Available'


class HeaderInfo extends React.Component {

  render() {
    let picture = this.props.user.picurl
    console.log("pic", picture)
    return (
      <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.left}>
          <View style={styles.available}></View>
          <Image style={styles.profilePic} source={{isStatic:true, uri: picture}}/>
        </View>
        <View style={styles.right}>
          <Text style={styles.title}>{this.props.user.username}</Text>
          <View style={styles.info}>
            <Text style={styles.cef}>Clicks</Text>
            <Text style={styles.cef}>Events</Text>
            <Text style={styles.cef}>Friends</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.nums}>{this.props.user.clicksum === null? 0 : this.props.user.clicksum}</Text>
            <Text style={styles.nums}>{this.props.user.eventsum}</Text>
            <Text style={styles.nums}>{this.props.user.friendstotal}</Text>
          </View>
          <TouchableOpacity style={styles.button} >
            <Button style={styles.button}  onPress={() => this.props.toggle.toggleAvailable()} color="#FFFFFF" title="Available"/>
          </TouchableOpacity>
        </View>
        </View>
        {(this.props.toggleForm === true)? <Available navigation={this.props.navigation}/> : null}
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#79CAE4',
    marginBottom: 10,
  },
  header: {
    backgroundColor: '#79CAE4',
    flexDirection: 'row',
  },
  profilePic: {
    borderRadius: 50,
    height: 100,
    width: 100,
    padding: 10,
  },
  button: {
    backgroundColor: '#2D9CDB',
    alignSelf: 'center',
    borderRadius: 5,
    padding: 10,
    paddingTop: 0,
    paddingBottom: 0,
  },
  title: {
    fontSize: 30,
    color: '#FFFFFF',
    marginLeft: 8,
    marginTop: 15,
  },
  cef: {
    padding: 10,
    paddingBottom: 0,
    color: '#FFFFFF',
  },
  nums: {
    padding: 10,
    paddingTop: 3,
    color: '#FFFFFF',
    marginBottom: 10,
    alignSelf: 'center'
  },
  left: {
    padding: 10,
  },
  right: {
    marginLeft: 20,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  available: {
    backgroundColor: '#EB5757',
    height: 25,
    width: 25,
    borderRadius: 50,
  },
});


const mapStateToProps = (state) => {
  return {
    toggleForm: state.toggle.toggleForm,
    login: state.login,
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggle: bindActionCreators(toggle, dispatch),
    userActions: bindActionCreators(userActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderInfo);
