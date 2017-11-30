import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { GiftedChat } from 'react-native-gifted-chat';
import axios from 'axios';

class MessageRoom extends Component {

  state = {
    messages: [],
  };

  componentDidMount() {

    axios.get(`http://localhost:3000/${this.props.user.id}/message/${this.props.navActions}`).then(messages => {
      this.setState({
        messages: messages.data,
      });
    })
  }

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
    console.log("messages", messages)
    console.log("2nd id", this.props);
    axios.post(`http://localhost:3000/${this.props.user.id}/message/${this.props.navActions}`, {message: messages[0].text})
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(messages) => this.onSend(messages)}
        user={{
          _id: this.props.user.id,
        }}
      />
    );
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.user,
    getActive: state.getActive,
    messageRoom: state.messageRoom,
    navActions: state.navActions
  };
};


export default connect(mapStateToProps) (MessageRoom);
