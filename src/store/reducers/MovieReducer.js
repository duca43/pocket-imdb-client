import { SET_MOVIES, SET_MOVIE } from '../actions/ActionTypes';

const initialState = {
  movies: {
    total: 0,
    total_pages: 1,
    page: 1,
    results: []
  },
  currentMovie: {},
  searchBy: ''
};
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return { ...state, movies: action.payload.movies, searchBy: action.payload.searchBy };
    case SET_MOVIE:
      return { ...state, currentMovie: action.payload };
    default:
      return state;
  }
};

export default movieReducer;
