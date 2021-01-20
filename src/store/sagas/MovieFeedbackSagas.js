import { call, put } from 'redux-saga/effects';

import { movieFeedbackService } from '../../services/MovieFeedbackService';
import { updateMovieFeedbacks } from '../actions/MovieFeedbackActions';

export function* addFeedback({ payload }) {
  try {
    yield call(movieFeedbackService.addFeedback, payload);
    yield put(updateMovieFeedbacks(payload));
  } catch (error) {
    console.log({ error });
  }
}