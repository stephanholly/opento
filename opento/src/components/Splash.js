
import React from 'react';
import {TouchableOpacity,Text,Image, View, Button, StyleSheet, TextInput} from 'react-native';
import firebase from 'firebase';


import LoginForm from './LoginForm';


class Splash extends React.Component {

  static navigationOptions = {
    header: null
  };

  componentWillMount() {
    if(!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: "AIzaSyDfkFq_YNQdGPLpz1yU_vh0Jv6pVrU5FGs",
      authDomain: "opentoweb-7d925.firebaseapp.com",
      databaseURL: "https://opentoweb-7d925.firebaseio.com",
      projectId: "opentoweb-7d925",
      storageBucket: "",
      messagingSenderId: "206509873649"
    });
   }
  }

  render() {
    console.disableYellowBox = true;
    return (
      <View style={styles.container}>
        <LoginForm navigation={this.props.navigation} />
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#79CAE4',
    height: '100%',
  },
  logo: {
    marginTop: 150,
    alignSelf: 'center',
  },
  username: {
    height: 30,
    alignSelf: 'center',
    textAlign: 'center',
    width: '60%',
    marginTop: 50,
    backgroundColor: 'white'
  },
  password: {
    height: 30,
    textAlign: 'center',
    alignSelf: 'center',
    width: '60%',
    marginTop: 20,
    backgroundColor: 'white'
  },
  button: {
    backgroundColor: '#2D9CDB',
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 10,
    padding: 10,
    paddingTop: 0,
    paddingBottom: 0,
  },
});



export default Splash;
