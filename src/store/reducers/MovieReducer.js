import { SET_MOVIES, SET_MOVIE, UPDATE_MOVIE_LIKES, REMOVE_MOVIE_LIKE, FLIP_MOVIE_LIKE } from '../actions/ActionTypes';

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
    case UPDATE_MOVIE_LIKES: {
      const likeProperty = action.payload.like === 1 ? 'likes' : 'dislikes';
      
      let currentMovieUpdate = {}

      if (state.currentMovie.id === action.payload.movie) {
        currentMovieUpdate = {
          ...state.currentMovie,
          [likeProperty]: state.currentMovie[likeProperty] + 1,
          user_liked_or_disliked: action.payload.like
        }
      }

      return { 
        ...state,
        movies: {
          ...state.movies,
          results: state.movies.results.map(movie => {
            if (movie.id !== action.payload.movie) {
              return movie;
            }
            return {
              ...movie,
              [likeProperty]: movie[likeProperty] + 1,
              user_liked_or_disliked: action.payload.like
            }
          })
        },
        currentMovie: {...state.currentMovie, ...currentMovieUpdate}
      };
    }
    case REMOVE_MOVIE_LIKE: {
      const likeProperty = action.payload.like === 1 ? 'likes' : 'dislikes';
      
      let currentMovieUpdate = {}

      if (state.currentMovie.id === action.payload.movie) {
        currentMovieUpdate = {
          ...state.currentMovie,
          [likeProperty]: state.currentMovie[likeProperty] - 1,
          user_liked_or_disliked: 0
        }
      }

      return { 
        ...state,
        movies: {
          ...state.movies,
          results: state.movies.results.map(movie => {
            if (movie.id !== action.payload.movie) {
              return movie;
            }
            return {
              ...movie,
              [likeProperty]: movie[likeProperty] - 1,
              user_liked_or_disliked: 0
            }
          })
        },
        currentMovie: {...state.currentMovie, ...currentMovieUpdate}
      };
    }
    case FLIP_MOVIE_LIKE: {
      const newLikeProperty = action.payload.like === 1 ? 'likes' : 'dislikes';
      const previousLikeProperty = action.payload.like !== 1 ? 'likes' : 'dislikes';
      
      let currentMovieUpdate = {}

      if (state.currentMovie.id === action.payload.movie) {
        currentMovieUpdate = {
          ...state.currentMovie,
          [previousLikeProperty]: state.currentMovie[previousLikeProperty] - 1,
          [newLikeProperty]: state.currentMovie[newLikeProperty] + 1,
          user_liked_or_disliked: action.payload.like
        }
      }

      return { 
        ...state,
        movies: {
          ...state.movies,
          results: state.movies.results.map(movie => {
            if (movie.id !== action.payload.movie) {
              return movie;
            }
            return {
              ...movie,
              [previousLikeProperty]: movie[previousLikeProperty] - 1,
              [newLikeProperty]: movie[newLikeProperty] + 1,
              user_liked_or_disliked: action.payload.like
            }
          })
        },
        currentMovie: {...state.currentMovie, ...currentMovieUpdate}
      };
    }
    default:
      return state;
  }
};

export default movieReducer;
