import React from 'react';
import {TouchableOpacity,Text,Image, View, Button, StyleSheet, TextInput} from 'react-native';
import { connect } from 'react-redux';
import CheckBox from 'react-native-check-box'
import { bindActionCreators } from 'redux';


import * as createEventActions from '../actions/createEvent'

class IndFriend extends React.Component {
  handleFriends = (text) => {
    this.props.createEventActions.addFriendToEvent(text);
  }

  render() {

    let picture = this.props.picurl
    return (
      <View style={styles.container}>
        <Image style={styles.profilePic} source={{isStatic:true, uri: picture}}/>
          <Text style={styles.username}>{this.props.username}</Text>
            <CheckBox style={styles.checkbox}
              onClick={()=> this.handleFriends(this.props.id)}
              isChecked={this.props.checked}
            />
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#79CAE4',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
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

    color: 'white',
    fontSize: 30,
    paddingTop: 8
  },
  nada: {
    height: 20,
    width: 20,
    marginTop: 20,
    marginRight: 10
  },
  checkbox: {
    marginTop: 18,
    marginRight: 10,
    height: 20,
    width: 20,

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
    pendingFR: state.pendingFR,
    createEvent: state.createEvent

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createEventActions: bindActionCreators(createEventActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IndFriend);
