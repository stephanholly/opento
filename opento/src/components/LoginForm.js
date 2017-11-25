import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Image, Button, TouchableOpacity, Alert } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as loginActions from '../actions/login';

class LoginForm extends Component {
  handleEmail = (text) => {
    this.props.loginActions.emailInput(text);
  }
  handlePw = (text) => {
    this.props.loginActions.pwInput(text);
  }
  handleLogin = () => {
    this.props.loginActions.login(
      this.props.login.email,
      this.props.login.password
    ).then(() => this.props.navigation.navigate('Feed'))
    .catch((e) => {
      this.props.navigation.navigate('Splash')
      Alert.alert(e.message)
    })
  }


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
            placeholder="Email"
            onChangeText={this.handleEmail}
            value={this.props.login.email}/>
          <TextInput
            style={styles.password}
            autoCorrect={false}
            placeholder="Password"
            onChangeText={this.handlePw}
            value={this.props.login.password}
            secureTextEntry/>
          <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
            <Button onPress={this.handleLogin} color="white" title="Login"/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Button color="#2D9CDB" onPress={() => navigate('SignUp')} title="Sign up"/>
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

const mapStateToProps = (state) => {
  return {
    login: state.login
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginActions: bindActionCreators(loginActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
