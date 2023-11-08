import {
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
      console.log({
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? { ...user, isLoggedin: true } : user
        ),
      });
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? { ...user, isLoggedin: true } : user
        ),
      };

    case LOGIN_ERROR:
      return state;

    case LOGOUT_SUCCESS:
      return state;

    case LOGOUT_ERROR:
      return state;

    default:
      return state;
  }
};

export default rootReducer;
