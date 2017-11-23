
import React from 'react';
import {TouchableOpacity,Text,Image, View, Button, StyleSheet, TextInput} from 'react-native';
import { connect } from 'react-redux';


class Settings extends React.Component {
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
        <View style={styles.header}>
          <View style={styles.left}>
            <Image style={styles.profilePic} source={require('../images/profilepic.png')}/>
            <TouchableOpacity style={styles.editphotobutton} >
              <Text style={styles.editphototext}>Edit Photo</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.right}>
            <Text style={styles.title}>Stephan Holly</Text>
          </View>
        </View>
        <Text style={styles.edittitle}>Edit Settings</Text>
        <View style={styles.inputs}>
          <TextInput
            style={styles.username}
            autoCorrect={false}
            placeholder="Username"
            />
          <TextInput
            style={styles.password}
            autoCorrect={false}
            placeholder="Email"
            />
          <TextInput
            style={styles.password}
            autoCorrect={false}
            placeholder="Password"
            />
          <TouchableOpacity style={styles.button} onPress={null}>
            <Button onPress={null} color="white" title="Submit"/>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomButtons}>
          <TouchableOpacity style={styles.logoutdelete} onPress={null}>
            <Button onPress={null} color="white" title="Logout"/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoutdelete} onPress={null}>
            <Button onPress={null} color="white" title="Delete"/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    friends: state.firstName,
    lastName: state.lastName,
    username: state.username,
    password: state.password,
    phoneNumber: state.phoneNumber
  };
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  header: {
    backgroundColor: '#79CAE4',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    alignSelf: 'center',
    marginTop: 75,
    backgroundColor: 'white'
  },
  profilePic: {
    borderRadius: 37.5,
    height: 75,
    width: 75,
    padding: 10,
  },
  title: {
    fontSize: 40,
    color: '#FFFFFF',
    marginLeft: 5,
    marginTop: 30,
  },
  edittitle: {
    color: '#2D9CDB',
    fontSize: 25,
    marginLeft: 8,
    marginTop: 8,
  },
  left: {
    padding: 10,
  },
  right: {
    marginLeft: 20,
  },
  logo: {
    marginTop: 150,
    alignSelf: 'center',
  },
  username: {
    height: 30,
    alignSelf: 'center',
    textAlign: 'center',
    width: '60%',
    marginTop: 90,
    backgroundColor: 'white',
    borderColor: '#2D9CDB',
    borderWidth: 1,
  },
  password: {
    height: 30,
    textAlign: 'center',
    alignSelf: 'center',
    width: '60%',
    marginTop: 35,
    backgroundColor: 'white',
    borderColor: '#2D9CDB',
    borderWidth: 1,
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
    height: 25,
    width: 25,
  },
  logoutdelete: {
    backgroundColor: '#79CAE4',
    alignSelf: 'center',
    borderRadius: 10,
    padding: 10,
    paddingTop: 0,
    paddingBottom: 0,
  },
  button: {
    backgroundColor: '#2D9CDB',
    marginTop: 27,
    alignSelf: 'center',
    borderRadius: 10,
    padding: 10,
    paddingTop: 0,
    paddingBottom: 0,
  },
  editphotobutton: {
    backgroundColor: '#2D9CDB',
    marginTop: 5,
    alignSelf: 'center',
    borderRadius: 7,
    height: 20,
    padding: 5,
    paddingTop: 4

  },
  editphototext: {
    backgroundColor: '#2D9CDB',
    alignSelf: 'center',
    borderRadius: 50,
    fontSize: 10,
    color: 'white'
  },
});



export default connect(mapStateToProps, null)(Settings);
