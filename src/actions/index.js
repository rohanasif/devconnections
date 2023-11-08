import axios from "axios";
import {
  USERSURL,
  SET_USERS,
  SIGNUP_ERROR,
  SIGNUP_SUCCESS,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
} from "../constants";

export const getUsers = () => async () => {
  try {
    const response = await axios.get(USERSURL);
    const users = response.data;
    return users;
  } catch (e) {
    console.error(e);
  }
};

export const getUser = (userId) => async () => {
  try {
    const response = await axios.get(`${USERSURL}/${userId}`);
    const user = response.data;
    return user;
  } catch (e) {
    console.error(e);
  }
};

export const setUsers = () => async (dispatch) => {
  try {
    const response = await axios.get(USERSURL);
    dispatch({
      type: SET_USERS,
      payload: response.data,
    });
  } catch (e) {
    console.error(e);
  }
};

export const signUp = (user) => async (dispatch) => {
  const { repeatPassword, ...userToRegister } = user;
  try {
    const allUsers = await dispatch(getUsers());
    if (user.password !== user.repeatPassword) {
      dispatch({ type: SIGNUP_ERROR, payload: "Passwords don't match!" });
    } else if (
      allUsers.length === 0 ||
      !allUsers.find((u) => u.email === user.email)
    ) {
      const response = await axios.post(USERSURL, userToRegister);
      dispatch({ type: SIGNUP_SUCCESS, payload: response.data });
    } else {
      dispatch({ type: SIGNUP_ERROR, payload: "User already registered!" });
    }
  } catch (e) {
    console.error(e);
  }
};

export const login = (user) => async (dispatch) => {
  try {
    const allUsers = await dispatch(getUsers());
    const userLoggingIn = allUsers.find(
      (u) =>
        u.password === user.password &&
        (u.name === user.name || u.email === user.email)
    );
    if (user.isLoggedin) {
      dispatch({
        type: LOGIN_ERROR,
        payload: `${user.name} is already logged in! Go to <Link to={"/"}>Home</Link>`,
      });
    } else if (userLoggingIn) {
      const response = await axios.patch(`${USERSURL}/${userLoggingIn.id}`, {
        isLoggedin: true,
      });
      dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    } else {
      dispatch({
        type: LOGIN_ERROR,
        payload: "Invalid Credentials",
      });
    }
  } catch (e) {
    console.error(e);
  }
};

export const getLoggedUser = () => async () => {
  try {
    const response = await axios.get(`${USERSURL}?isLoggedin=true`);
    const userArr = response.data;
    const user = userArr[0];
    return user;
  } catch (e) {
    console.error(e);
  }
};

export const logout = (user) => async (dispatch) => {
  try {
    if (user.isLoggedin) {
      const response = await axios.patch(`${USERSURL}/${user.id}`, {
        isLoggedin: false,
      });

      dispatch({ type: LOGOUT_SUCCESS, payload: response.data });
    } else {
      dispatch({
        type: LOGOUT_ERROR,
        payload: "User not logged in! Please refresh!",
      });
    }
  } catch (e) {
    console.error(e);
  }
};
