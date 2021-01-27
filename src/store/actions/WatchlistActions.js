import {
  GET_WATCHLIST,
  SET_WATCHLIST,
  ADD_TO_WATCHLIST,
  PUT_MOVIE_INTO_WATCHLIST,
  REMOVE_FROM_WATCHLIST,
  PUT_MOVIE_OUT_OF_WATCHLIST,
  UPDATE_WATCHED,
  UPDATE_MOVIE_IN_WATCHLIST
} from './ActionTypes';

export const getWatchlist = (payload) => {
  return {
    type: GET_WATCHLIST,
    payload
  }
};

export const updateWatchlist = (payload) => {
  return {
    type: SET_WATCHLIST,
    payload
  }
};

export const addToWatchlist = (payload) => {
  return {
    type: ADD_TO_WATCHLIST,
    payload
  }
};

export const putMovieIntoWatchlist = (payload) => {
  return {
    type: PUT_MOVIE_INTO_WATCHLIST,
    payload
  }
};

export const removeFromWatchlist = (payload) => {
  return {
    type: REMOVE_FROM_WATCHLIST,
    payload
  }
};

export const putMovieOutOfWatchlist = (payload) => {
  return {
    type: PUT_MOVIE_OUT_OF_WATCHLIST,
    payload
  }
};

export const updateWatched = (payload) => {
  return {
    type: UPDATE_WATCHED,
    payload
  }
};

export const updateMovieInWatchlist = (payload) => {
  return {
    type: UPDATE_MOVIE_IN_WATCHLIST,
    payload
  }
};