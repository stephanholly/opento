import React from 'react';
import {TouchableOpacity,Text,Image, View, Button, StyleSheet, TextInput, DatePickerIOS} from 'react-native';
import { connect } from 'react-redux';

import ChooseFriends from './ChooseFriends'

class Available extends React.Component {


  onDateChange = (date) => {
  this.setState({date: date});
}

  render() {

    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.input1}>
          <Text style={styles.text}>Beginning: </Text>
            <DatePickerIOS
              style={styles.time}
              date={new Date()}
              mode="time"
              onDateChange={this.onDateChange}
              minuteInterval={10}
            />
          <TouchableOpacity style={styles.enterButton} onPress={() => navigate('ChooseFriends')}>
            <Image style={styles.next}  source={require('../images/go.png')}/>
          </TouchableOpacity>
        </View>

      </View>
    );s
  }
}


const mapStateToProps = (state) => {
  return {
    friends: state.friends,
    date: state.date
  };
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#79CAE4',
  },
  input1: {
    flexDirection: 'row',
    marginTop: 15,
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
    marginTop: 30
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
    marginTop: 0,
    marginLeft: 3,
    height: 30
  },
  profilePic: {
    borderRadius: 50,
  },
  next: {
    height: 20,
    width: 20,
    padding: 5
  },
  text: {

    fontSize: 26,
    color: 'white',
    marginTop: 88,
  },
});



export default connect(mapStateToProps, null)(Available);
