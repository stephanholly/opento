import React from 'react';
import {TouchableOpacity,Text,Image, View, Button, StyleSheet, TextInput} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as tabs from '../actions/tabs';
// import components here
import MyFeed from './MyFeed'
import MyEvents from './MyEvents'
import JoinedEvents from './JoinedEvents'


class Tabs extends React.Component {

  render() {
    return (
      <View style={styles.container}>
          <TouchableOpacity style={styles.button}>
            <Button onPress={() => this.props.tabs.myEventsTab()} style={styles.button} color='#2D9CDB' title="My Events"/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Button onPress={() => this.props.tabs.feedTab()} style={styles.button} color='#2D9CDB' title="Feed"/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Button onPress={() => this.props.tabs.activeTab()} style={styles.button} color='#2D9CDB' title="Active"/>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',

  },
  button: {
    width: 125,
    height: 45,
    paddingTop: 3,
    backgroundColor: 'white',
    borderColor: '#2D9CDB',
    borderWidth: 0.5,
  }
});

const mapStateToProps = (state) => {
  return {
    myevents: state.tabs.myEvents,
    feed: state.tabs.feed,
    active: state.tabs.active
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    tabs: bindActionCreators(tabs, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
