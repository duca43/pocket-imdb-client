import { 
  GET_MOVIES, 
  SET_MOVIES, 
  GET_MOVIE, 
  SET_MOVIE, 
  ADD_LIKE, 
  UPDATE_MOVIE_LIKES, 
  REMOVE_LIKE, 
  REMOVE_MOVIE_LIKE,
  INCREMENT_VISITS,
  UPDATE_MOVIE_VISITS,
  POST_COMMENT,
  UPDATE_MOVIE_COMMENTS,
  GET_COMMENTS,
  PUT_MOVIE_COMMENT,
  GET_POPULAR_MOVIES,
  SET_POPULAR_MOVIES,
  GET_RELATED_MOVIES,
  SET_RELATED_MOVIES
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

export const addOrUpdateLike = (payload) => {
  return {
    type: ADD_LIKE,
    payload
  }
};

export const incrementVisits = payload => {
  return {
    type: INCREMENT_VISITS,
    payload
  };
};

export const updateMovieVisits = payload => {
  return {
    type: UPDATE_MOVIE_VISITS,
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
  }
};

export const postComment = (payload) => {
  return {
    type: POST_COMMENT,
    payload
  };
};

export const putMovieComment = (payload) => {
  return {
    type: PUT_MOVIE_COMMENT,
    payload
  }
};

export const getComments = (payload) => {
  return {
    type: GET_COMMENTS,
    payload
  };
};

export const updateMovieComments = (payload) => {
  return {
    type: UPDATE_MOVIE_COMMENTS,
    payload
  }
};

export const getPopularMovies = () => {
  return {
    type: GET_POPULAR_MOVIES
  }
};

export const setPopularMovies = (payload) => {
  return {
    type: SET_POPULAR_MOVIES,
    payload
  }
}

export const getRelatedMovies = (payload) => {
  return {
    type: GET_RELATED_MOVIES,
    payload
  }
};

export const setRelatedMovies = (payload) => {
  return {
    type: SET_RELATED_MOVIES,
    payload
  }
};