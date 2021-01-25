import ApiService from './ApiService';
import { format } from 'util';

const ENDPOINTS = {
  MOVIES: '/api/movies/',
  GET_WATCHLIST: '/api/watch-list/',
  MOVIE_WATCHLIST: '/api/watch-list/%s/movies/%s/'
};

class MovieService extends ApiService {
  getMovies = (payload) => {
    return this.apiClient.get(ENDPOINTS.MOVIES + '?page=' + payload.page + "&search=" + payload.search + "&genre=" + payload.genre);
  };

  getMovie = (id) => {
    return this.apiClient.get(ENDPOINTS.MOVIES + id);
  };

  addOrUpdateLike = (payload) => {
    return this.apiClient.post(ENDPOINTS.MOVIES + payload.movie + '/like/', {like: payload.like});
  };

  removeLike = (id) => {
    return this.apiClient.delete(ENDPOINTS.MOVIES + id + '/remove-like/');
  };
  
  incrementVisits = (id) => {
    return this.apiClient.patch(ENDPOINTS.MOVIES + id + '/visits/');
  };

  getWatchlist = () => {
    return this.apiClient.get(ENDPOINTS.GET_WATCHLIST);
  };

  addToWatchlist = (payload) => {
    return this.apiClient.put(format(ENDPOINTS.MOVIE_WATCHLIST, payload.watchListId, payload.movieId));
  };

  removeFromWatchlist = (payload) => {
    return this.apiClient.delete(format(ENDPOINTS.MOVIE_WATCHLIST, payload.watchListId, payload.movieId));
  };

  updateWatched = (payload) => {
    return this.apiClient.patch(format(ENDPOINTS.MOVIE_WATCHLIST, payload.watchListId, payload.movieId), { watched: payload.watched });
  };
}

export const movieService = new MovieService();
