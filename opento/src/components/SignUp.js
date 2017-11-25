import React from 'react';
import {TouchableOpacity,Text,Image, View, Button, StyleSheet, TextInput} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as signupActions from '../actions/signup';
import * as serverSignUpActions from '../actions/serverSignUp';

class SignUp extends React.Component {
  handleEmail = (text) => {
    this.props.signupActions.emailInput(text);
  }
  handlePw = (text) => {
    this.props.signupActions.pwInput(text);
  }
  handleFn = (text) => {
    this.props.signupActions.firstName(text);
  }
  handleLn = (text) => {
    this.props.signupActions.lastName(text);
  }
  handleUn = (text) => {
    this.props.signupActions.username(text);
  }
  handleSignup = () => {
    this.props.signupActions.signup(this.props.signup.email,this.props.signup.password)
    .then(() => {
      this.props.signupActions.postDB(this.props.signup)
    .then(() => {
      this.props.navigation.navigate('Splash')
    })
  })
}


  static navigationOptions = {
  header: null
};
  render() {

    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../images/logo.png')}
          />
          <View style={styles.inputs}>
            <TextInput
              style={styles.username}
              autoCorrect={false}
              placeholder="Username"
              onChangeText={this.handleUn}
              value={this.props.signup.username}
              />
            <TextInput
              style={styles.password}
              autoCorrect={false}
              placeholder="First Name"
              onChangeText={this.handleFn}
              value={this.props.signup.firstName}
              />
            <TextInput
              style={styles.password}
              autoCorrect={false}
              placeholder="Last Name"
              onChangeText={this.handleLn}
              value={this.props.signup.lastName}
              />
            <TextInput
              style={styles.password}
              autoCorrect={false}
              placeholder="Email"
              onChangeText={this.handleEmail}
              value={this.props.signup.email}
              />
            <TextInput
              style={styles.password}
              secureTextEntry
              autoCorrect={false}
              placeholder="Password"
              onChangeText={this.handlePw}
              value={this.props.signup.password}
              />
          <TouchableOpacity style={styles.button} onPress={this.handleSignup}>
            <Button onPress={this.handleSignup} color="white" title="Create User"/>
          </TouchableOpacity>
        </View>
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
    marginTop: 110,
    alignSelf: 'center',
  },
  username: {
    height: 30,
    alignSelf: 'center',
    textAlign: 'center',
    width: '60%',
    marginTop: 20,
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

const mapStateToProps = (state) => {
  return {
    signup: state.signup

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signupActions: bindActionCreators(signupActions, dispatch),
    serverSignUpActions: bindActionCreators(serverSignUpActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
