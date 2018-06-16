import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const jobs = createReducer([{}], {
  [types.SET_JOBS](state, action) {
    var newState = action.jobs;
    return newState;
  }
});
