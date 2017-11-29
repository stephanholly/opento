import React from 'react';
import {TouchableOpacity,Text,Image, View, Button, StyleSheet, TextInput, DatePickerIOS} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ChooseFriends from './ChooseFriends'

import * as createEventActions from '../actions/createEvent'

class Available extends React.Component {
  handleLocation = (text) => {
    this.props.createEventActions.locationInput(text);
  }


  render() {

    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.input2}>
          <Text style={styles.text}>Location: </Text>
          <TextInput
            style={styles.from2}
            autoCorrect={false}
            onChangeText={this.handleLocation}
            value={this.props.createEvent.location}
          />
          <TouchableOpacity style={styles.enterButton} onPress={() => navigate('ChooseFriends')}>
            <Image style={styles.next}  source={require('../images/go.png')}/>
          </TouchableOpacity>
        </View>



    </View>
    );s
  }
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#79CAE4',
  },
  input1: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 16,
    justifyContent: 'space-between',
    width: '80%',
    alignSelf: 'flex-start',
  },
  input2: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
  },
  time: {
    width: '50%',
  },
  from: {
    height: 30,
    width: '60%',
    alignSelf: 'center',
    textAlign: 'center',
    backgroundColor: 'white',
    marginTop: 10
  },
  from2: {
    height: 30,
    width: '57%',
    alignSelf: 'center',
    textAlign: 'center',
    backgroundColor: 'white',
    marginTop: 10
  },
  button: {
    backgroundColor: '#2D9CDB',
    alignSelf: 'center',
    borderRadius: 10,
    padding: 10,
    paddingTop: 0,
    paddingBottom: 0,
  },
  enterButton: {
    backgroundColor: '#2D9CDB',
    alignSelf: 'center',
    borderRadius: 10,
    padding: 5,
    paddingLeft: 7,
    marginTop: 10,
    marginLeft: 8,
    height: 30
  },
  profilePic: {
    borderRadius: 50,
  },
  next: {
    height: 20,
    width: 20,
    padding: 5,
  },
  text: {
    fontSize: 26,
    color: 'white',
    marginTop: 10,
  },
});


const mapStateToProps = (state) => {
  return {
    friends: state.friends,
    date: state.date,
    createEvent: state.createEvent
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    createEventActions: bindActionCreators(createEventActions, dispatch),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Available);
