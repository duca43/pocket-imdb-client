import { all, takeLatest } from 'redux-saga/effects';
import { 
  LOGIN, 
  REGISTER, 
  GET_MOVIES, 
  GET_MOVIE, 
  ADD_LIKE, 
  REMOVE_LIKE,
  INCREMENT_VISITS, 
  POST_COMMENT, 
  GET_COMMENTS, 
  GET_WATCHLIST, 
  ADD_TO_WATCHLIST, 
  REMOVE_FROM_WATCHLIST, 
  UPDATE_WATCHED,
  GET_POPULAR_MOVIES,
  GET_RELATED_MOVIES
} from '../actions/ActionTypes';
import { userLogin, userRegister } from './AuthSagas';
import { 
  getMovie, 
  moviesGet, 
  addOrUpdateLike, 
  removeLike, 
  incrementVisits, 
  postComment, 
  getComments, 
  getPopularMovies,
  getRelatedMovies
} from './MovieSagas';
import { getWatchlist, addToWatchlist, removeFromWatchlist, updateWatched } from './WatchlistSagas';

export default function* rootSaga() {
  yield all([
    takeLatest(LOGIN, userLogin),
    takeLatest(REGISTER, userRegister),
    takeLatest(GET_MOVIES, moviesGet),
    takeLatest(GET_MOVIE, getMovie),
    takeLatest(ADD_LIKE, addOrUpdateLike),
    takeLatest(REMOVE_LIKE, removeLike),
    takeLatest(INCREMENT_VISITS, incrementVisits),
    takeLatest(POST_COMMENT, postComment),
    takeLatest(GET_COMMENTS, getComments),
    takeLatest(GET_WATCHLIST, getWatchlist),
    takeLatest(ADD_TO_WATCHLIST, addToWatchlist),
    takeLatest(REMOVE_FROM_WATCHLIST, removeFromWatchlist),
    takeLatest(UPDATE_WATCHED, updateWatched),
    takeLatest(GET_POPULAR_MOVIES, getPopularMovies),
    takeLatest(GET_RELATED_MOVIES, getRelatedMovies)
  ]);
}
