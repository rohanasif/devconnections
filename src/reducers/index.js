import {
  SET_USERS,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
} from "../constants";

const initialState = { users: [], message: { text: "" } };

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.payload };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.payload],
        message: { text: "Registration successful" },
      };

    case SIGNUP_ERROR:
      return {
        ...state,
        message: { text: action.payload },
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? { ...user, isLoggedin: true } : user
        ),
        message: { text: "You are now logged in!" },
      };

    case LOGIN_ERROR:
      return {
        ...state,
        message: { text: action.payload },
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? { ...user, isLoggedin: false } : user
        ),
        message: { text: "You are now logged out!" },
      };

    case LOGOUT_ERROR:
      return {
        ...state,
        message: { text: action.payload },
      };

    default:
      return state;
  }
};

export default rootReducer;
