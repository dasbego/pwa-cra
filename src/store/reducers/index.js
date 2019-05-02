// Root Reducer
import { combineReducers } from 'redux';
import userProfile from './userProfile';
import loading from './loading';

export default combineReducers({
  userProfile,
  loading
});
