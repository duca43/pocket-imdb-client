import ApiService from './ApiService';

const ENDPOINTS = {
  MOVIES: '/api/movies/'
};

class MovieService extends ApiService {
  getMovies = (payload) => {
    return this.apiClient.get(ENDPOINTS.MOVIES + '?page=' + payload.page + "&search=" + payload.search + "&genre=" + payload.genre);
  };

  getMovie = (id) => {
    return this.apiClient.get(ENDPOINTS.MOVIES + id);
  };
}

export const movieService = new MovieService();
