import ApiService from './ApiService';

const ENDPOINTS = {
  MOVIES: '/api/movies/',
  POPULAR_MOVIES: '/api/popular-movies'
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

  getPopularMovies = () => {
    return this.apiClient.get(ENDPOINTS.POPULAR_MOVIES);
  };
}

export const movieService = new MovieService();
