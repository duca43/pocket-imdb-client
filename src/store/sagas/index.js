import { all, takeLatest } from 'redux-saga/effects';
import { LOGIN, REGISTER, GET_MOVIES, GET_MOVIE, ADD_FEEDBACK } from '../actions/ActionTypes';
import { userLogin, userRegister } from './AuthSagas';
import { getMovie, moviesGet } from './MovieSagas';
import { addFeedback } from './MovieFeedbackSagas';

export default function* rootSaga() {
  yield all([
    takeLatest(LOGIN, userLogin),
    takeLatest(REGISTER, userRegister),
    takeLatest(GET_MOVIES, moviesGet),
    takeLatest(GET_MOVIE, getMovie),
    takeLatest(ADD_FEEDBACK, addFeedback)
  ]);
}
