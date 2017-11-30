import React from 'react';
import {TouchableOpacity,Text,Image, View, Button, StyleSheet, TextInput} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AllFriends from './AllFriends'

import * as getFriendsActions from '../actions/getFriends'
import * as createEventActions from '../actions/createEvent'

class ChooseFriends extends React.Component {
  componentWillMount = () => {
    this.props.getFriendsActions.getFriends(this.props.user.id)
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
    headerStyle: {
      backgroundColor: '#79CAE4',
    },
  });

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <AllFriends friends={this.props.friends}/>
        <View style={styles.footer}>
            <TouchableOpacity onPress={() => {
                  this.props.createEventActions.createEvent(this.props.createEvent.location, this.props.user)

                    .then(()=> {
                      this.props.createEventActions.populateInvited(this.props.createEvent)
                        .then(() => {
                      this.props.navigation.navigate('Feed')
                    })
                  })
              }}>
              <Image style={styles.next}  source={require('../images/go.png')}/>
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
    flexDirection: 'column',
    justifyContent: 'space-between'
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
  footer: {
    height: 50,
    backgroundColor: 'white'
  },
  next: {
    marginTop: 15,
    height: 20,
    width: 20,
    padding: 5,
    alignSelf: 'center'
  },
});


const mapStateToProps = (state) => {
  return {
    friends: state.getFriends,
    user: state.user,
    createEvent: state.createEvent,
    getMyEvents: state.getMyEvents
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

    getFriendsActions: bindActionCreators(getFriendsActions, dispatch),
    createEventActions: bindActionCreators(createEventActions, dispatch)

  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ChooseFriends);
