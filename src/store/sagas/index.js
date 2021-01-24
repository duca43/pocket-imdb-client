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
  GET_COMMENTS } from '../actions/ActionTypes';
import { userLogin, userRegister } from './AuthSagas';
import { getMovie, moviesGet, addOrUpdateLike, removeLike, incrementVisits, postComment, getComments } from './MovieSagas';

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
  ]);
}
