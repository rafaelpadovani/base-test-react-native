import * as types from './types';
import Api from '../lib/api';

export function login(email, password) {
  return (dispatch, getState) => {
    Api.post('interview-test/login', {
      email: email,
      password: password}).then( resp => {
      if (resp.err) {
      }
      dispatch({
        type: types.SET_USER,
        user: {
          loggedIn: true,
          ...resp
        }
      });
    });
  }
}


export function setLoginScreenItems(user) {
  return {
    type: types.SET_USER,
    user
  }
}
