import {
  LOAD_EVENTS,
  EVENTS_LOADED,
  LOGGING_IN,
  LOGGED_IN,
  LOG_OUT,
  ERROR
} from "./actions";

const initialState = {
  loading: false,
  events: [],
  token: "",
  name: ""
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ERROR:
      console.error(action.payload);
      return { ...state, loading: false };
    case LOG_OUT:
      return initialState;
    case LOGGING_IN:
    case LOAD_EVENTS:
      return { ...state, loading: true };
    case LOGGED_IN:
      console.log("logged in payload", action.payload);
    case EVENTS_LOADED:
      return { ...state, ...action.payload, loading: false };
    default:
      return state;
  }
};
