import ApiService from './ApiService';
import { format } from 'util'

const ENDPOINTS = {
  MOVIES: '/api/movies/',
  GET_MOVIES: '/api/movies/?page=%d&search=%s&genre=%s',
  GET_MOVIE: '/api/movies/%d',
  LIKE: '/api/movies/%d/like/',
  REMOVE_LIKE: '/api/movies/%d/remove-like/',
  VISITS: '/api/movies/%d/visits/',
  COMMENTS: '/api/movies/%d/comments/',
  GET_COMMENTS: '/api/movies/%d/comments/?page=%d',
  POPULAR_MOVIES: '/api/popular-movies',
  RELATED_MOVIES: '/api/movies/%s/related'
};

class MovieService extends ApiService {
  getMovies = (payload) => {
    return this.apiClient.get(format(ENDPOINTS.GET_MOVIES, payload.page, payload.search, payload.genre));
  };

  getMovie = (id) => {
    return this.apiClient.get(format(ENDPOINTS.GET_MOVIE, id));
  };

  addOrUpdateLike = (payload) => {
    return this.apiClient.post(format(ENDPOINTS.LIKE, payload.movie), {like: payload.like});
  };

  removeLike = (id) => {
    return this.apiClient.delete(format(ENDPOINTS.REMOVE_LIKE, id));
  };
  
  incrementVisits = (id) => {
    return this.apiClient.patch(format(ENDPOINTS.VISITS, id));
  };

  postComment = (payload) => {
    return this.apiClient.post(format(ENDPOINTS.COMMENTS, payload.movie), { content: payload.content });
  };

  getComments = (payload) => {
    return this.apiClient.get(format(ENDPOINTS.GET_COMMENTS, payload.movie, payload.page));
  };

  getPopularMovies = () => {
    return this.apiClient.get(ENDPOINTS.POPULAR_MOVIES);
  };

  getRelatedMovies = (id) => {
    return this.apiClient.get(format(ENDPOINTS.RELATED_MOVIES, id));
  };
}

export const movieService = new MovieService();
