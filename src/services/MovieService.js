import ApiService from './ApiService';

const ENDPOINTS = {
  MOVIES: '/api/movies/'
};

class MovieService extends ApiService {
  getMovies = (payload) => {
    return this.apiClient.get(ENDPOINTS.MOVIES + '?page=' + payload.page + "&search=" + payload.search);
  };

  getMovie = (id) => {
    return this.apiClient.get(ENDPOINTS.MOVIES + id);
  };

  addOrUpdateLike = (payload) => {
    return this.apiClient.post(ENDPOINTS.MOVIES + payload.movie + '/likes/', {like: payload.like});
  };

  removeLike = (id) => {
    return this.apiClient.delete(ENDPOINTS.MOVIES + id + '/likes/');
  };
}

export const movieService = new MovieService();
