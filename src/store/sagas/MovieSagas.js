import { call, put } from 'redux-saga/effects';

import { movieService } from '../../services/MovieService';
import { setMovies, setMovie } from '../actions/MovieActions';
import { push, go } from 'connected-react-router';

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
    yield put(push('/not-found'));
    yield put(go());
  }
}
