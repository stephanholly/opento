import React from 'react';
import {TouchableOpacity,Text,Image, View, Button, StyleSheet, TextInput} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons';

import HeaderInfo from './HeaderInfo';
import Tabs from './Tabs';
import MyEvents from './MyEvents'
import JoinedEvents from './JoinedEvents'
import MyFeed from './MyFeed'



class Feed extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: <Image
      style={styles.iconCenter}
      source={require('../images/logo.png')}
      />,
    headerLeft: <TouchableOpacity onPress={() => navigation.navigate('Friends')}><Image
      style={styles.iconLeft}
      source={require('../images/friends.png')}
      /></TouchableOpacity>,
    headerRight: <TouchableOpacity onPress={() => navigation.navigate('Settings')}><Image
      style={styles.iconRight}
      source={require('../images/whitecog.png')}
      /></TouchableOpacity>,
    headerStyle: {
      backgroundColor: '#79CAE4',
    },
  });
  render() {
    const { navigate } = this.props.navigation;
    return (

      <View style={styles.container}>
        <HeaderInfo navigation={this.props.navigation}/>
        <Tabs/>
        {(this.props.myevents === true)? <MyEvents /> : null}
        {(this.props.feed === true)? <MyFeed /> : null}
        {(this.props.active === true)? <JoinedEvents /> : null}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#79CAE4',

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
  iconLeft: {
    marginLeft: 15,
    height: 25,
    width: 25,
  },
  iconRight: {
    marginRight: 15,
    height: 25,
    width: 25,
  },
  iconCenter: {
    height: 30,
    width: 50,
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
    myevents: state.tabs.myevents,
    feed: state.tabs.feed,
    active: state.tabs.active
  };
};

export default connect(mapStateToProps, null)(Feed);
