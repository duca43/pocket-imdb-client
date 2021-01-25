import { call, put } from 'redux-saga/effects';

import { movieService } from '../../services/MovieService';
import { setMovies, setMovie, updateMovieLikes, removeMovieLike, updateMovieVisits, updateWatchlist, putMovieIntoWatchlist, putMovieOutOfWatchlist, updateMovieInWatchlist } from '../actions/MovieActions';
import { push, go } from 'connected-react-router';

export function* moviesGet({ payload }) {
  try {
    const { data } = yield call(movieService.getMovies, payload);

    yield put(setMovies({movies: data, searchBy: payload.search, genreFilter: payload.genre}));
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
    yield call(movieService.removeLike, payload);
    yield put(removeMovieLike(payload));
  } catch (error) {
    console.log({ error });
  }
}

export function* incrementVisits({ payload }) {
  try {
    yield call(movieService.incrementVisits, payload);

    yield put(updateMovieVisits(payload));
  } catch (error) {
    yield put(push('/not-found'));
    yield put(go());
  }
}

export function* getWatchlist() {
  try {
    const { data } = yield call(movieService.getWatchlist);
    yield put(updateWatchlist(data));
  } catch (error) {
    yield put(push('/not-found'));
    yield put(go());
  }
}

export function* addToWatchlist({ payload }) {
  try {
    yield call(movieService.addToWatchlist, payload);
    yield put(putMovieIntoWatchlist(payload));
  } catch (error) {
    yield put(push('/not-found'));
    yield put(go());
  }
}

export function* removeFromWatchlist({ payload }) {
  try {
    yield call(movieService.removeFromWatchlist, payload);
    yield put(putMovieOutOfWatchlist(payload));
  } catch (error) {
    yield put(push('/not-found'));
    yield put(go());
  }
}

export function* updateWatched({ payload }) {
  try {
    yield call(movieService.updateWatched, payload);
    yield put(updateMovieInWatchlist(payload));
  } catch (error) {
    yield put(push('/not-found'));
    yield put(go());
  }
}