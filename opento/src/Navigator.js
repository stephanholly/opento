import React from 'react';
import { StackNavigator } from 'react-navigation';

// import components here
import Splash from './components/Splash'
import Feed from './components/Feed'
import SignUp from './components/SignUp'
import Friends from './components/Friends'
import Settings from './components/Settings'
import Tabs from './components/Tabs'
import Available from './components/Available'
import ChooseFriends from './components/ChooseFriends'
import HeaderInfo from './components/HeaderInfo'
import MessageRoom from './components/MessageRoom'
import SingleActiveItem from './components/SingleActiveItem'
import JoinedEvents from './components/JoinedEvents'


const Navigator = StackNavigator({
  Splash: {screen: Splash},
  SignUp: {screen: SignUp},
  Feed: {screen: Feed},
  Settings: {screen: Settings},
  Friends: {screen: Friends},
  Tabs: {screen: Tabs},
  Available: {screen: Available},
  ChooseFriends: {screen: ChooseFriends},
  HeaderInfo: {screen: HeaderInfo},
  MessageRoom: {screen: MessageRoom},
  SingleActiveItem: {screen: SingleActiveItem},
  JoinedEvents: {screen: JoinedEvents}
});

export default Navigator;
