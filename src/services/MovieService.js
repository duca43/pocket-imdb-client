import ApiService from './ApiService';

const ENDPOINTS = {
  MOVIES: '/api/movies'
};

class MovieService extends ApiService {
  getMovies = () => {
    this.api.removeHeaders(['Authorization'])
    return this.apiClient.get(ENDPOINTS.MOVIES);
  };
}

export const movieService = new MovieService();
