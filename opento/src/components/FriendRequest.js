import React from 'react';
import {TouchableOpacity,Text,Image, View, Button, StyleSheet, TextInput} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as friendRequestAction from '../actions/friendRequest'

class FriendRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = { uri: require('../images/plus.png') }
  }

  changeLogo() {
    console.log('state changed!');
    this.setState({
      uri: require('../images/clock.gif')
    });
  }


  render() {
      console.log("user state",this.props.user)
      console.log("pendingfriend state", this.props.info);
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => {
          this.props.friendRequestAction.friendRequest(this.props.info.id, this.props.user.id)
          this.changeLogo()
        }}>
          <Image style={styles.sendfriend}  source={this.state.uri}/>
        </TouchableOpacity>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#79CAE4',
    height: '100%',
  },
  sendfriend: {
    height: 20,
    width: 20,
    marginTop: 20,
    marginRight: 10
  },
});


const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    friendRequestAction: bindActionCreators(friendRequestAction, dispatch)
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(FriendRequest);
