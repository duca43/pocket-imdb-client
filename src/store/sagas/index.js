import { all, takeLatest } from 'redux-saga/effects';
import { LOGIN, REGISTER, GET_MOVIES, GET_MOVIE, ADD_LIKE, REMOVE_LIKE, INCREMENT_VISITS, GET_WATCHLIST, ADD_TO_WATCHLIST, REMOVE_FROM_WATCHLIST, UPDATE_WATCHED } from '../actions/ActionTypes';
import { userLogin, userRegister } from './AuthSagas';
import { getMovie, moviesGet, addOrUpdateLike, removeLike, incrementVisits, getWatchlist, addToWatchlist, removeFromWatchlist, updateWatched } from './MovieSagas';

export default function* rootSaga() {
  yield all([
    takeLatest(LOGIN, userLogin),
    takeLatest(REGISTER, userRegister),
    takeLatest(GET_MOVIES, moviesGet),
    takeLatest(GET_MOVIE, getMovie),
    takeLatest(ADD_LIKE, addOrUpdateLike),
    takeLatest(REMOVE_LIKE, removeLike),
    takeLatest(INCREMENT_VISITS, incrementVisits),
    takeLatest(GET_WATCHLIST, getWatchlist),
    takeLatest(ADD_TO_WATCHLIST, addToWatchlist),
    takeLatest(REMOVE_FROM_WATCHLIST, removeFromWatchlist),
    takeLatest(UPDATE_WATCHED, updateWatched)
  ]);
}
