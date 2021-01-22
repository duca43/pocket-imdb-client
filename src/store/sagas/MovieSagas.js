import { call, put } from 'redux-saga/effects';

import { movieService } from '../../services/MovieService';
import { setMovies, setMovie, updateMovieLikes, removeMovieLike } from '../actions/MovieActions';
import { push, go } from 'connected-react-router';

export function* moviesGet({ payload }) {
  try {
    const { data } = yield call(movieService.getMovies, payload);

    yield put(setMovies({movies: data, searchBy: payload.search}));
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

export function* addOrUpdateLike({ payload }) {
  try {
    yield call(movieService.addOrUpdateLike, payload);
    yield put(updateMovieLikes(payload));
  } catch (error) {
    console.log({ error });
  }
}

export function* removeLike({ payload }) {
  try {
    yield call(movieService.removeLike, payload.movie);
    yield put(removeMovieLike(payload));
  } catch (error) {
    console.log({ error });
  }
}
