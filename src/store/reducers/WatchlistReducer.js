import { SET_WATCHLIST, PUT_MOVIE_INTO_WATCHLIST, PUT_MOVIE_OUT_OF_WATCHLIST, UPDATE_MOVIE_IN_WATCHLIST } from '../actions/ActionTypes';

const initialState = {
  all: []
};
const watchlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WATCHLIST:
      return { ...state, all: action.payload };
    case PUT_MOVIE_INTO_WATCHLIST:
      return { ...state, all: [ ...state.all, action.payload ] };
    case PUT_MOVIE_OUT_OF_WATCHLIST:
      return { 
        ...state, 
        all: state.all.filter(watchlistMovie => watchlistMovie.id !== action.payload.watchlistMovieId)
      };
    case UPDATE_MOVIE_IN_WATCHLIST:
      return { 
        ...state, 
        all: state.all.map(watchlistMovie => {
          if (watchlistMovie.id !== action.payload.watchlistMovieId) {
            return watchlistMovie;
          }
          return {
            ...watchlistMovie,
            is_watched: action.payload.watched
          }
        })
      };
    default:
      return state;
  }
};

export default watchlistReducer;
