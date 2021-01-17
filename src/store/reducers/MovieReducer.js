import { SET_MOVIES } from '../actions/ActionTypes';

const initialState = {
  movies: {
    page: 1
  }
};
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return { ...state, movies: action.payload };
    default:
      return state;
  }
};

export default movieReducer;
