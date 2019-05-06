// Root Reducer
import { combineReducers } from 'redux';
import userProfile from './userProfile';
import loading from './loading';
import events from './events';
import drawer from './drawer';

export default combineReducers({
  userProfile,
  loading,
  events,
  drawer
});
