import { LOGIN_ERROR, REGISTER_ERROR, NOT_FOUND_ERROR } from "./ActionTypes";

export const loginError = payload => {
    return {
      type: LOGIN_ERROR,
      payload
    };
};

export const registerError = payload => {
    return {
      type: REGISTER_ERROR,
      payload
    };
};

export const notFoundError = payload => {
    return {
      type: NOT_FOUND_ERROR,
      payload
    };
};