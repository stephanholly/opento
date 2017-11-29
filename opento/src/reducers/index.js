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
  pendingFRInfo
});

export default rootReducer;
