
import React from 'react';
import {TouchableOpacity,Text,Image, View, Button, StyleSheet, TextInput} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FriendSearch from './FriendSearch'
import AllUsers from './AllUsers'

import * as friendSearch from '../actions/friendSearch';
import * as usersActions from '../actions/users';


class Friends extends React.Component {
  componentWillMount = () => {
    this.props.usersActions.getAllUsers(this.props.user.id)
  }


  static navigationOptions = ({ navigation }) => ({
    title: <Image
      style={styles.iconCenter}
      source={require('../images/logo.png')}
      />,
    headerLeft: <TouchableOpacity onPress={() => navigation.navigate('Feed')}><Image
      style={styles.iconLeft}
      source={require('../images/back.png')}
      /></TouchableOpacity>,
    headerRight: <TouchableOpacity onPress={() => this.handleFriendSearch()}><Image
      style={styles.iconRight}
      source={require('../images/mag1.png')}
      /></TouchableOpacity>,
    headerStyle: {
      backgroundColor: '#79CAE4',
    },
  });
  render() {

    handleFriendSearch = () => this.props.friendSearch.friendSearch()

    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        {(this.props.friendSearchState === true)? <FriendSearch /> : null}
        <AllUsers users={this.props.users}/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',

  },
  logo: {
    marginTop: 150,
    alignSelf: 'center',
  },
  iconLeft: {
    marginLeft: 15,
    height: 25,
    width: 25,
  },
  iconCenter: {
    height:30,
    width: 50,
  },
  iconRight: {
    marginRight: 15,
    height: 30,
    width: 37,
  },
});



const mapStateToProps = (state) => {
  return {
    friends: state.friends,
    friendSearchState: state.friendSearch.friendSearchState,
    users: state.users,
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

    friendSearch: bindActionCreators(friendSearch, dispatch),
    usersActions: bindActionCreators(usersActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Friends);
