import { SET_MOVIES, SET_MOVIE, UPDATE_MOVIE_FEEDBACKS } from '../actions/ActionTypes';

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
    case UPDATE_MOVIE_FEEDBACKS: {
      const tmpMovies = {...state.movies};
      const index = tmpMovies.results.findIndex(movie => movie.id === action.payload.movie);
      const feedbackProperty = action.payload.feedback ? 'likes' : 'dislikes';
      tmpMovies.results[index][feedbackProperty]++;
      tmpMovies.results[index].user_feedback = action.payload.feedback;

      if (state.currentMovie.id) {
        const tmpCurrentMovie = {...state.currentMovie};
        tmpCurrentMovie[feedbackProperty]++;
        tmpCurrentMovie.user_feedback = action.payload.feedback;
        return { ...state, movies: tmpMovies, currentMovie: tmpCurrentMovie };
      }

      return { ...state, movies: tmpMovies };
    }
    default:
      return state;
  }
};

export default movieReducer;
