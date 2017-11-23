import React from 'react';
import {TouchableOpacity,Text,Image, View, Button, StyleSheet, TextInput} from 'react-native';
import { connect } from 'react-redux';

class ChooseFriends extends React.Component {
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
        <Text>choose some friends</Text>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#79CAE4',
    height: '100%',
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
});



export default connect(null, null)(ChooseFriends);
