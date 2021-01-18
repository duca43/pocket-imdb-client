import { LOGIN_ERROR, REGISTER_ERROR, NOT_FOUND_ERROR } from '../actions/ActionTypes';

const initialState = {
  loginError: {
    hasError: false,
    message: ''
  },
  registerError: {
    hasError: false,
    message: ''
  },
  notFoundError: {
    hasError: false,
    message: ''
  }
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      return { ...state, loginError: action.payload };
    case REGISTER_ERROR:
      return { ...state, registerError: action.payload };
    case NOT_FOUND_ERROR:
      return { ...state, notFoundError: action.payload };
    default:
      return state;
  }
};

export default errorReducer;
