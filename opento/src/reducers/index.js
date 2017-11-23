import { combineReducers } from 'redux';
import nav from './nav';
import login from './login';
import logout from './logout';
import signup from './signup';
import toggle from './toggle';
import tabs from './tabs';
import friendSearch from './friendSearch'

const rootReducer = combineReducers({
  nav,
  login,
  logout,
  signup,
  toggle,
  tabs,
  friendSearch
});

export default rootReducer;
