import React from 'react';
import {TouchableOpacity,Text,Image, View, Button, StyleSheet, TextInput} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as updateFRActions from '../actions/pendingFRInfo'
import * as userActions from '../actions/user'

class SingleFriendRequest extends React.Component {


  render() {
    let picture = this.props.picurl

    return (

      <View style={styles.container}>
        <View>
          <Image style={styles.profilePic} source={{isStatic:true, uri: picture}}/>
        </View>
        <View style={styles.rows}>
          <Text style={styles.username}>{this.props.username}</Text>
        </View>
        <View style={styles.handandclick}>
          <TouchableOpacity style={styles.acceptdeny} onPress={() => {
            this.props.updateFRActions.acceptFR(this.props.user.id, this.props.id)
            .then(()=> {
            this.props.userActions.getFriendsTotal(this.props.login.uid)
            })
          }}>
            <Text style={styles.buttonfont}>Accept</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.acceptdeny} onPress={() => {
            this.props.updateFRActions.denyFR(this.props.user.id, this.props.id)
            }
          }>
            <Text style={styles.buttonfont}>Deny</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#2D9CDB',
    justifyContent: "space-between",
    paddingRight: 25,
    paddingLeft: 25
  },
  profilePic: {
    borderRadius: 17,
    height: 35,
    width: 35,
    padding: 5,
    margin: 10,
  },
  username: {
    color: '#2D9CDB',
    fontSize: 20,
    textAlign: 'center'
  },
  rows: {
  alignSelf: 'center',
  },
  clickImage: {
    height: 18,
    width: 18,
    marginTop: 10,
    marginRight: 8
  },
  handandclick: {
    flexDirection: 'row'
  },
  nada: {
    height: 0,
    width: 0
 },
  acceptdeny: {
    height: 20,
    width: 50,
    borderWidth: 1,
    borderColor: '#2D9CDB',
    margin: 7,
    marginTop: 20
  },
  buttonfont: {
    fontSize: 10,
    padding: 3,
    color: '#2D9CDB',
    textAlign: 'center'
  }
});

const mapStateToProps = (state) => {
  return {
    user: state.user,
    pendingFRInfo: state.pendingFRInfo,
    login: state.login
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userActions: bindActionCreators(userActions, dispatch),
    updateFRActions: bindActionCreators(updateFRActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleFriendRequest);
