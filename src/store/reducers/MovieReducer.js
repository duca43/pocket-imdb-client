import { 
  SET_MOVIES, 
  SET_MOVIE, 
  UPDATE_MOVIE_LIKES, 
  REMOVE_MOVIE_LIKE, 
  UPDATE_MOVIE_VISITS, 
  UPDATE_MOVIE_COMMENTS,
  PUT_MOVIE_COMMENT
} from '../actions/ActionTypes';

const initialState = {
  movies: {
    total: 0,
    total_pages: 1,
    page: 1,
    results: []
  },
  currentMovie: {},
  comments: {
    total: 0,
    total_pages: 1,
    page: 0,
    results: []
  },
  searchBy: '',
  genreFilter: ''
};
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return { ...state, movies: action.payload.movies, searchBy: action.payload.searchBy, genreFilter: action.payload.genreFilter };
    case SET_MOVIE:
      return { ...state, currentMovie: { ...state.currentMovie, ...action.payload } };
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
    case PUT_MOVIE_COMMENT:
      return { 
        ...state, 
        comments: {
          ...state.comments,
          results: [
            action.payload,
            ...state.comments.results.filter((result, index, self) => 
              self.findIndex(r => result.created_at === r.created_at) === index
            )
          ],
          total: state.comments.total + 1
        }
      };
    case UPDATE_MOVIE_COMMENTS:
      return { 
        ...state, 
        comments: {
          ...action.payload,
          results: [
            ...state.comments.results, 
            ...action.payload.results.filter((result, index, self) => 
              self.findIndex(r => result.created_at === r.created_at) === index
            )
          ]
        }
      };
    default:
      return state;
  }
};

export default movieReducer;
