import { SET_JOB, ADD_JOB, DELETE_JOB } from "./contians";

export const setjob = (payload) => {
  return {
    type: SET_JOB,
    payload
  };
};
export const addjob = (payload) => {
  return {
    type: ADD_JOB,
    payload
  };
};
export const deletejob = (payload) => {
  return {
    type: DELETE_JOB,
    payload
  };
};
