import { 
  GET_MOVIES, 
  SET_MOVIES, 
  GET_MOVIE, 
  SET_MOVIE, 
  ADD_LIKE, 
  UPDATE_MOVIE_LIKES, 
  REMOVE_LIKE, 
  REMOVE_MOVIE_LIKE,
  FLIP_LIKE,
  FLIP_MOVIE_LIKE
} from './ActionTypes';

export const getMovies = (payload) => {
  return {
    type: GET_MOVIES,
    payload
  };
};

export const setMovies = payload => {
  return {
    type: SET_MOVIES,
    payload
  };
};

export const getMovie = (payload) => {
  return {
    type: GET_MOVIE,
    payload
  };
};

export const setMovie = payload => {
  return {
    type: SET_MOVIE,
    payload
  };
};

export const addLike = (payload) => {
  return {
    type: ADD_LIKE,
    payload
  };
};

export const updateMovieLikes = (payload) => {
  return {
    type: UPDATE_MOVIE_LIKES,
    payload
  };
};

export const removeLike = (payload) => {
  return {
    type: REMOVE_LIKE,
    payload
  };
};

export const removeMovieLike = (payload) => {
  return {
    type: REMOVE_MOVIE_LIKE,
    payload
  };
};

export const flipLike = (payload) => {
  return {
    type: FLIP_LIKE,
    payload
  };
};

export const flipMovieLike = (payload) => {
  return {
    type: FLIP_MOVIE_LIKE,
    payload
  };
};