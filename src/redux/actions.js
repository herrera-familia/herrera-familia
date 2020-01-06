import axios from "axios";

export const LOAD_EVENTS = "LOAD_EVENTS";
export const EVENTS_LOADED = "EVENTS_LOADED";
export const LOGGING_IN = "LOGGING_IN";
export const LOGGED_IN = "LOGGED_IN";
export const LOG_OUT = "LOG_OUT";
export const ERROR = "ERROR";

const url = "http://localhost:8000";

export const login = creds => {
  const promise = axios.post(`${url}/login`, creds);
  return dispatch => {
    dispatch({ type: LOGGING_IN });
    promise
      .then(response => {
        if (response.status === 200) {
          let { token, name } = response.data;
          dispatch({ type: LOGGED_IN, payload: { token, name } });
        } else {
          dispatch({ type: ERROR, payload: response.error });
        }
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};
