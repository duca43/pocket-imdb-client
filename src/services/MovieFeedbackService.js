import ApiService from './ApiService';

const ENDPOINTS = {
  MOVIE_FEEDBACKS: '/api/movie_feedbacks/'
};

class MovieFeedbackService extends ApiService {
  addFeedback = (payload) => {
    return this.apiClient.post(ENDPOINTS.MOVIE_FEEDBACKS, payload);
  };
}

export const movieFeedbackService = new MovieFeedbackService();
