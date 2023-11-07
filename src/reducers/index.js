import {
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from "../constants";

const initialState = { users: [] };

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case SIGNUP_ERROR:
      return state;
    case LOGIN_SUCCESS:
      return state;
    case LOGIN_ERROR:
      return state;
    default:
      return state;
  }
};

export default rootReducer;
