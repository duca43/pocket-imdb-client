import { call, put } from 'redux-saga/effects';

import { watchlistService } from '../../services/WatchlistService';
import { updateWatchlist, putMovieIntoWatchlist, putMovieOutOfWatchlist, updateMovieInWatchlist } from '../actions/WatchlistActions';
import { push, go } from 'connected-react-router';

export function* getWatchlist({ payload }) {
  try {
    const { data } = yield call(watchlistService.getWatchlist, payload);
    yield put(updateWatchlist(data));
  } catch (error) {
    yield put(push('/not-found'));
    yield put(go());
  }
}

export function* addToWatchlist({ payload }) {
  try {
    const { data } = yield call(watchlistService.addToWatchlist, payload);
    yield put(putMovieIntoWatchlist(data));
  } catch (error) {
    yield put(push('/not-found'));
    yield put(go());
  }
}

export function* removeFromWatchlist({ payload }) {
  try {
    yield call(watchlistService.removeFromWatchlist, payload);
    yield put(putMovieOutOfWatchlist(payload));
  } catch (error) {
    yield put(push('/not-found'));
    yield put(go());
  }
}

export function* updateWatched({ payload }) {
  try {
    yield call(watchlistService.updateWatched, payload);
    yield put(updateMovieInWatchlist(payload));
  } catch (error) {
    yield put(push('/not-found'));
    yield put(go());
  }
}