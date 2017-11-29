import React from 'react';
import {TouchableOpacity,Text,Image, View, Button, StyleSheet, TextInput} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as getActiveActions from '../actions/getActive'
import * as getFeedActions from '../actions/getFeed'


class SingleFeedItem extends React.Component {

  render() {
    let picture = this.props.picurl

    return (
      <TouchableOpacity
        onPress={() => {
          this.props.getActiveActions.addActive(this.props.user.id, this.props.id)
          .then(() => {
            this.props.getFeedActions.getFeed(this.props.login.uid)
          })
        }}
        >
        <View style={styles.container}>
        <View>
          <Image style={styles.profilePic} source={{isStatic:true, uri: picture}}/>
        </View>
        <View style={styles.rows}>
          <Text style={styles.username}>{this.props.username}</Text>
          <Text style={styles.location}>{this.props.location}</Text>
        </View>
        <View style={styles.icons}>
          <View style={styles.handandclick}>
            <Text style={styles.clicks}>{this.props.clicks}</Text>
            <Image style={styles.clickImage} source={require('../images/clicks.png')}/>
          </View>
            {this.props.clicked === true? <Image style={styles.clicked} source={require('../images/check.png')}/> : null}
          </View>

      </View>
      </TouchableOpacity>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#79CAE4',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#2D9CDB',
    justifyContent: "space-between"
  },
  profilePic: {
    borderRadius: 25,
    height: 60,
    width: 60,
    padding: 5,
    margin: 10,
  },
  username: {
    color: 'white',
    fontSize: 25,
    paddingTop: 5,
    textAlign: 'center'
  },
  location: {
    color: '#2D9CDB',
    fontSize: 15,
    paddingTop: 3,
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
  clicked: {
    height: 12,
    width: 12,
    marginTop: 0,
    marginLeft: 20
  },
  clicks: {
    fontSize: 15,
    padding: 10,
    paddingRight: 3,
    color: 'white',
  },
  handandclick: {
    flexDirection: 'row'
  },
  icons: {
    flexDirection: 'column'
  }
});

const mapStateToProps = (state) => {
  return {
    getFeed: state.getFeed,
    getActive: state.getActive,
    user: state.user,
    login: state.login
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    getActiveActions: bindActionCreators(getActiveActions, dispatch),
    getFeedActions: bindActionCreators(getFeedActions, dispatch),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(SingleFeedItem);
