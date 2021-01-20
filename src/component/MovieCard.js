import React from 'react';
import '../styles/css/movies/movie_card.css'
import { MOVIE_GENRES } from '../constants/movies'
import { withRouter } from 'react-router-dom';
import MovieFeedback from './movies/MovieFeedback';

const MovieCard = ({ movie, history }) => (
  <div className="card">
    <button className="btn" onClick={ () => history.push('/movie/' + movie.id) }>
      <div className="embed-responsive embed-responsive-4by3">
        <img className="card-img-top embed-responsive-item" src={ movie.cover_image_url } alt="Not available :(" />
      </div>
      <div className="card-body">
        <h4 className="card-title">{ movie.title }</h4>
        <h6 className="card-subtitle mb-3 text-muted">{ MOVIE_GENRES[movie.genre] }</h6>
        <p className="card-text">{ movie.description }</p>
      </div>
    </button>
    <hr />
    <div className="card-body">
      <MovieFeedback movie={ movie } />
    </div>
  </div>
);

export default withRouter(MovieCard);
