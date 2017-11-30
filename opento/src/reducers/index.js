import { combineReducers } from 'redux';
import nav from './nav';
import login from './login';
import logout from './logout';
import signup from './signup';
import toggle from './toggle';
import tabs from './tabs';
import friendSearch from './friendSearch'
import feed from './feed'
import user from './user'
import users from './users'
import getFeed from './getFeed'
import getMyEvents from './getMyEvents'
import getActive from './getActive'
import filterPhrase from './filterPhrase'
import pendingFR from './pendingFR'
import friendRequest from './friendRequest'
import pendingFRInfo from './pendingFRInfo'
import getFriends from './getFriends'
import createEvent from './createEvent'
import populateEventInvited from './populateEventInvited'
import navActions from './navActions'

const rootReducer = combineReducers({
  nav,
  login,
  logout,
  signup,
  toggle,
  tabs,
  friendSearch,
  feed,
  user,
  users,
  getFeed,
  getActive,
  getMyEvents,
  filterPhrase,
  pendingFR,
  friendRequest,
  pendingFRInfo,
  getFriends,
  createEvent,
  populateEventInvited,
  navActions
});

export default rootReducer;
