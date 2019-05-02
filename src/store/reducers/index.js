// Root Reducer
import { combineReducers } from 'redux';
import userProfile from './userProfile';
import loading from './loading';
import events from './events';

export default combineReducers({
  userProfile,
  loading,
  events
});
