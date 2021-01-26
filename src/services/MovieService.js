import ApiService from './ApiService';
import { format } from 'util'

const ENDPOINTS = {
  MOVIES: '/api/movies/',
  RELATED_MOVIES: '/api/movies/%s/related'
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

  getRelatedMovies = (id) => {
    return this.apiClient.get(format(ENDPOINTS.RELATED_MOVIES, id));
  };
}

export const movieService = new MovieService();
