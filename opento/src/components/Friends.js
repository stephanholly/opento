
import React from 'react';
import {TouchableOpacity,Text,Image, View, Button, StyleSheet, TextInput} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FriendSearch from './FriendSearch'

import * as friendSearch from '../actions/friendSearch';

class Friends extends React.Component {

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
      source={require('../images/plus.png')}
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
        <Text>friends list</Text>
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
    width: 30,
  },
});



const mapStateToProps = (state) => {
  return {
    friends: state.friends,
    friendSearchState: state.friendSearch.friendSearchState
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    friendSearch: bindActionCreators(friendSearch, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Friends);
