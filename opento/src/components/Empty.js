import React from 'react';
import {TouchableOpacity,Text,Image, View, Button, StyleSheet, TextInput} from 'react-native';
import { connect } from 'react-redux';

import Tabs from './Tabs'

class Empty extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Tabs/>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#79CAE4',
    height: '100%',
  },

});



export default connect(null, null)(Empty);
