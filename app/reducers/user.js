import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const user = createReducer({
  loggedIn: false,
  name: ''
}, {
  [types.SET_USER](state, action) {
    var newState = action.user;
    return newState;
  }
});
