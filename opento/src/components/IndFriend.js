import React from 'react';
import {TouchableOpacity,Text,Image, View, Button, StyleSheet, TextInput} from 'react-native';
import CheckBox from 'react-native-check-box'
import { connect } from 'react-redux';



class IndFriend extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    isChecked: false
  };
  }

  handlePressCheckedBox = (checked) => {
    this.setState({
      isChecked: true,
    });
  }


  render() {
    let picture = this.props.picurl
    return (
      <View style={styles.container}>
        <Image style={styles.profilePic} source={{isStatic:true, uri: picture}}/>
          <Text style={styles.username}>{this.props.username}</Text>
          <CheckBox
            style={styles.checkbox}
            onClick={null}
            isChecked={false}
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
    pendingFR: state.pendingFR
  };
};



export default connect(mapStateToProps, null)(IndFriend);
