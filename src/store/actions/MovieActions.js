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
  GET_WATCHLIST,
  UPDATE_WATCHLIST,
  ADD_TO_WATCHLIST,
  PUT_MOVIE_INTO_WATCHLIST,
  REMOVE_FROM_WATCHLIST,
  PUT_MOVIE_OUT_OF_WATCHLIST,
  UPDATE_WATCHED,
  UPDATE_MOVIE_IN_WATCHLIST
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

export const getWatchlist = () => {
  return {
    type: GET_WATCHLIST
  }
};

export const updateWatchlist = (payload) => {
  return {
    type: UPDATE_WATCHLIST,
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