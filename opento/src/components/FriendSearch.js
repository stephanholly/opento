import React from 'react';
import {TouchableOpacity,Text,Image, View, Button, StyleSheet, TextInput} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as friendSearch from '../actions/friendSearch';



const FriendSearch = () => {

    return (
      <View style={styles.container}>
      <TextInput
        style={styles.searchBox}
        autoCorrect={false}
        placeholder="Search"
        />
      <TouchableOpacity style={styles.button} >
        <Button style={styles.button}  onPress={() => this.props.friendSearch.friendSearch()} color="#FFFFFF" title="Cancel"/>
      </TouchableOpacity>
      </View>
    );

}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  searchBox: {
    backgroundColor: 'white',
    margin: 3,
    width: '80%'
  },
});

const mapStateToProps = (state) => {
  return {
    friendSearchState: state.friendSearch.friendSearchState,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    friendSearch: bindActionCreators(friendSearch, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendSearch);
