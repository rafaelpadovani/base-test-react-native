import { combineReducers } from 'redux';
import * as userReducers from './user';
import * as jobsReducers from './jobs';

export default combineReducers(Object.assign(
  userReducers,
  jobsReducers
));
