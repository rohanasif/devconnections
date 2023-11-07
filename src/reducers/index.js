import {
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from "../constants";
const initialState = {};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {};
    case SIGNUP_ERROR:
      return {};
    case LOGIN_SUCCESS:
      return {};
    case LOGIN_ERROR:
      return {};
  }
};

export default rootReducer;
