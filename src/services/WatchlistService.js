import ApiService from './ApiService';
import { format } from 'util';

const ENDPOINTS = {
  WATCHLIST: '/api/users/%s/watchlist/',
  SET_WATCHLIST: '/api/users/%s/watchlist/%s/',
};

class WatchlistService extends ApiService {

  getWatchlist = (userId) => {
    return this.apiClient.get(format(ENDPOINTS.WATCHLIST, userId));
  };

  addToWatchlist = (payload) => {
    return this.apiClient.post(format(ENDPOINTS.WATCHLIST, payload.userId), { movie: payload.movieId });
  };

  removeFromWatchlist = (payload) => {
    return this.apiClient.delete(format(ENDPOINTS.SET_WATCHLIST, payload.userId, payload.watchlistMovieId));
  };

  updateWatched = (payload) => {
    return this.apiClient.patch(format(ENDPOINTS.SET_WATCHLIST, payload.userId, payload.watchlistMovieId), { is_watched: payload.watched });
  };
}

export const watchlistService = new WatchlistService();
