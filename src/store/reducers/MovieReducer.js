import { SET_MOVIES, SET_MOVIE, UPDATE_MOVIE_VISITS } from '../actions/ActionTypes';

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
    case UPDATE_MOVIE_VISITS: {
      let currentMovieUpdate = {};

      if (state.currentMovie.visits) {
        currentMovieUpdate = {
          ...state.currentMovie,
          visits: state.currentMovie + 1
        }
      }

      return { ...state, currentMovie: {...state.currentMovie, ...currentMovieUpdate } };
    }
    default:
      return state;
  }
};

export default movieReducer;
