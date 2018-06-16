import * as types from './types';
import Api from '../lib/api';


export function getJobsHandler(id) {
  return (dispatch, getState) => {
    Api.post('interview-test/jobs', {userId: id}).then( resp => {
      if (resp.err) {
      }
      dispatch({
        type: types.SET_JOBS,
          ...resp
      });
    });
  }
}


export function setJobsScreenItems(jobs) {
  return {
    type: types.SET_JOBS,
    jobs
  }
}
