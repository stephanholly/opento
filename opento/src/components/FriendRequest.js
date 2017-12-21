import React from 'react';
import {TouchableOpacity,Text,Image, View, Button, StyleSheet, TextInput} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as friendRequestAction from '../actions/friendRequest'

class FriendRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = { uri: require('../images/blueplus.png') }
  }

  changeLogo() {
    console.log('state changed!');
    this.setState({
      uri: require('../images/clock3.png')
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
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
  sendfriend: {
    height: 17,
    width: 17,
    marginTop: 21,
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
