import { call, put } from 'redux-saga/effects';

import { movieService } from '../../services/MovieService';
import { setMovies, setMovie } from '../actions/MovieActions';
import { notFoundError } from '../actions/ErrorActions';
import { extractErrorMessage } from '../../util/error'

export function* moviesGet({ payload }) {
  try {
    const { data } = yield call(movieService.getMovies, payload);

    yield put(setMovies(data));
  } catch (error) {
    console.log({ error });
  }
}

export function* getMovie({ payload }) {
  try {
    const { data } = yield call(movieService.getMovie, payload);

    yield put(setMovie(data));
  } catch (error) {
    yield put(notFoundError({hasError: true, message: extractErrorMessage(error)}));
  }
}
