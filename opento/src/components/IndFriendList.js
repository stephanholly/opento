import React from 'react';
import {TouchableOpacity,Text,Image, View, Button, StyleSheet,  TextInput} from 'react-native';
import { connect } from 'react-redux';

import FriendRequest from './FriendRequest'

class IndFriendList extends React.Component {

  render() {
    let picture = this.props.picurl
    return (
      <View style={styles.container}>
        <Image style={styles.profilePic} source={{isStatic:true, uri: picture}}/>

          <Text style={styles.username}>{this.props.username}</Text>

            {this.props.user.friendshipids? (this.props.user.friendshipids.includes(this.props.id)? <View style={styles.nada}></View> : (this.props.pendingFR.pendingFR.includes(this.props.id) === true? <Image style={styles.clicked} source={require('../images/clock.gif')}/> : <FriendRequest info={this.props}/>)) : null}

      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: '#2D9CDB',
    alignSelf: 'center',
    width: '100%',
    justifyContent: 'space-between'
  },
  profilePic: {
    borderRadius: 20,
    height: 40,
    width: 40,
    padding: 5,
    margin: 10,
  },
  username: {

    color: '#2D9CDB',
    fontSize: 30,
    paddingTop: 8
  },
  nada: {
    height: 20,
    width: 20,
    marginTop: 20,
    marginRight: 10
  },

  clicked: {
    height: 20,
    width: 20,
    marginTop: 20,
    marginRight: 10
  },
});

const mapStateToProps = (state) => {
  return {
    user: state.user,
    pendingFR: state.pendingFR
  };
};



export default connect(mapStateToProps, null)(IndFriendList);
