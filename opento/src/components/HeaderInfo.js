
import React from 'react';
import {TouchableOpacity,Text,Image, View, Button, StyleSheet, TextInput} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as toggle from '../actions/toggle';

import Available from './Available'


class HeaderInfo extends React.Component {

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.left}>
          <View style={styles.available}></View>
          <Image style={styles.profilePic} source={require('../images/profilepic.png')}/>
        </View>
        <View style={styles.right}>
          <Text style={styles.title}>Stephan Holly</Text>
          <View style={styles.info}>
            <Text style={styles.cef}>Clicks</Text>
            <Text style={styles.cef}>Events</Text>
            <Text style={styles.cef}>Friends</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.nums}>100</Text>
            <Text style={styles.nums}>234</Text>
            <Text style={styles.nums}>123</Text>
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
    borderRadius: 10,
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
    toggleForm: state.toggle.toggleForm
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggle: bindActionCreators(toggle, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderInfo);
