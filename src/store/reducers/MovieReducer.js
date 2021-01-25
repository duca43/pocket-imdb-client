import { SET_MOVIES, SET_MOVIE, UPDATE_MOVIE_LIKES, REMOVE_MOVIE_LIKE, UPDATE_MOVIE_VISITS, UPDATE_WATCHLIST, ADD_TO_WATCHLIST, REMOVE_FROM_WATCHLIST, UPDATE_MOVIE_IN_WATCHLIST } from '../actions/ActionTypes';

const initialState = {
  movies: {
    total: 0,
    total_pages: 1,
    page: 1,
    results: []
  },
  currentMovie: {},
  searchBy: '',
  genreFilter: '',
  watchlist: {
    movies: []
  }
};
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return { ...state, movies: action.payload.movies, searchBy: action.payload.searchBy, genreFilter: action.payload.genreFilter };
    case SET_MOVIE:
      return { ...state, currentMovie: action.payload };
    case UPDATE_MOVIE_LIKES: {
      const likeProperty = action.payload.like === 1 ? 'likes' : 'dislikes';
      const otherProperty = action.payload.like === -1 ? 'likes' : 'dislikes';
      
      let currentMovieUpdate = {}

      if (state.currentMovie.id === action.payload.movie) {
        currentMovieUpdate = {
          ...state.currentMovie,
          [likeProperty]: state.currentMovie[likeProperty] + 1,
          [otherProperty]: state.currentMovie['user_liked_or_disliked'] === 0 ? state.currentMovie[otherProperty] : state.currentMovie[otherProperty] - 1,
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
              [otherProperty]: movie['user_liked_or_disliked'] === 0 ? movie[otherProperty] : movie[otherProperty] - 1,
              user_liked_or_disliked: action.payload.like
            }
          })
        },
        currentMovie: {...state.currentMovie, ...currentMovieUpdate}
      };
    }
    case REMOVE_MOVIE_LIKE: {
      let currentMovieUpdate = {}

      if (state.currentMovie.id === action.payload) {
        const likeProperty = state.currentMovie.user_liked_or_disliked === 1 ? 'likes' : 'dislikes';
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
            if (movie.id !== action.payload) {
              return movie;
            }

            const likeProperty = movie.user_liked_or_disliked === 1 ? 'likes' : 'dislikes';
            console.log(movie.user_liked_or_disliked)
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
    case UPDATE_MOVIE_VISITS:
      return { ...state, currentMovie: {...state.currentMovie, visits: state.currentMovie.visits + 1 } };
    case UPDATE_WATCHLIST:
      return { ...state, watchlist: {...state.watchlist, ...action.payload } };
    case ADD_TO_WATCHLIST:
        return { 
          ...state, 
          movies: {
            ...state.movies,
            results: state.movies.results.map(movie => {
              if (movie.id !== action.payload.movieId) {
                return movie;
              }
              return {
                ...movie,
                in_user_watch_list: true
              }
            })
          },
          currentMovie: {
            ...state.currentMovie,
            in_user_watch_list: true
          }
        };
    case REMOVE_FROM_WATCHLIST:
      return { 
        ...state, 
        watchlist: {
          ...state.watchlist,
          movies: state.watchlist.movies.filter(movieWatch => movieWatch.movie.id !== action.payload.movieId)
        }
      };
    case UPDATE_MOVIE_IN_WATCHLIST:
      return { 
        ...state, 
        watchlist: {
          ...state.watchlist,
          movies: state.watchlist.movies.map(movieWatch => {
            if (movieWatch.movie.id !== action.payload.movieId) {
              return movieWatch;
            }
            return {
              ...movieWatch,
              watched: action.payload.watched
            }
          })
        }
      };
    default:
      return state;
  }
};

export default movieReducer;
