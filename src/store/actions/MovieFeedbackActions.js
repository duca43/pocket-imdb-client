import { ADD_FEEDBACK, UPDATE_MOVIE_FEEDBACKS } from './ActionTypes';

export const addFeedback = (payload) => {
  return {
    type: ADD_FEEDBACK,
    payload
  };
};

export const updateMovieFeedbacks = (payload) => {
  return {
    type: UPDATE_MOVIE_FEEDBACKS,
    payload
  };
};