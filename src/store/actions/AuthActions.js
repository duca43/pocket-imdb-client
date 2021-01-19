import { LOGIN, AUTH_USER, REGISTER } from './ActionTypes';

export const logIn = logInData => {
  return {
    type: LOGIN,
    payload: logInData
  };
};

export const register = registerData => {
  return {
    type: REGISTER,
    payload: registerData
  };
};

export const authUser = payload => {
  return {
    type: AUTH_USER,
    payload
  };
};