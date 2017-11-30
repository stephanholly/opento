import React from 'react';
import {TouchableOpacity,Text,Image, View, Button, StyleSheet, TextInput} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import HeaderInfo from './HeaderInfo';
import Tabs from './Tabs';
import MyEvents from './MyEvents'
import JoinedEvents from './JoinedEvents'
import MyFeed from './MyFeed'

import * as userActions from '../actions/user'
import * as getFeedActions from '../actions/getFeed'
import * as getActiveActions from '../actions/getActive'
import * as getMyEventsActions from '../actions/getMyEvents'
import * as pendingFRActions from '../actions/pendingFR'
import * as pendingFRInfoActions from '../actions/pendingFRInfo'


class Feed extends React.Component {

  componentDidMount = () => {
      this.props.userActions.getUser(this.props.login.uid)
      .then(() => {
      this.props.getActiveActions.getActive(this.props.login.uid)
      this.props.userActions.getClickSum(this.props.login.uid)
      this.props.userActions.getEventSum(this.props.login.uid)
      this.props.userActions.getFriendsTotal(this.props.login.uid)
      this.props.getFeedActions.getFeed(this.props.login.uid)
      this.props.getMyEventsActions.getMyEvents(this.props.user.username)
      this.props.userActions.getFriendIds(this.props.user.id)
      this.props.pendingFRActions.pendingFR(this.props.user.id)
      this.props.pendingFRInfoActions.pendingFRInfo(this.props.user.id)

  })
}


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
    headerBackTitle: null,

  });
  render() {
    console.log("this.props.nav", this.props.navigation)
    const { navigate } = this.props.navigation;
    return (

      <View style={styles.container}>
        <HeaderInfo user={this.props.user} navigation={this.props.navigation}/>
        <Tabs/>
        {(this.props.myevents === true)? <MyEvents navigation={this.props.navigation} pendingFRInfo={this.props.pendingFRInfo} getMyEvents={this.props.getMyEvents}/> : null}
        {(this.props.feed === true)? <MyFeed getFeed={this.props.getFeed}/> : null}
        {(this.props.active === true)? <JoinedEvents navigation={this.props.navigation} getActive={this.props.getActive}/> : null}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#79CAE4',
    height: '100%'

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
    active: state.tabs.active,
    login: state.login,
    user: state.user,
    pendingFR: state.pendingFR,
    getFeed: state.getFeed,
    getMyEvents: state.getMyEvents,
    getActive: state.getActive,
    pendingFRInfo: state.pendingFRInfo,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userActions: bindActionCreators(userActions, dispatch),
    getFeedActions: bindActionCreators(getFeedActions, dispatch),
    getActiveActions: bindActionCreators(getActiveActions, dispatch),
    getMyEventsActions: bindActionCreators(getMyEventsActions, dispatch),
    pendingFRActions: bindActionCreators(pendingFRActions, dispatch),
    pendingFRInfoActions: bindActionCreators(pendingFRInfoActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
