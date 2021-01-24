import React from 'react';
import '../../styles/css/movies/movie_card.css'
import { MOVIE_GENRES } from '../../constants/movies'
import { withRouter } from 'react-router-dom';
import MovieLikes from './MovieLikes';

const MovieCard = ({ movie, history }) => (
  <div className="card">
    <button className="btn p-0" onClick={ () => history.push('/movie/' + movie.id) }>
      <div className="embed-responsive embed-responsive-4by3">
        <img className="card-img-top embed-responsive-item" src={ movie.cover_image_url } alt="Not available :(" />
      </div>
      <div className="card-body pb-0">
        <h4 className="card-title">{ movie.title }</h4>
        <h6 className="card-subtitle mb-3 text-muted">{ MOVIE_GENRES[movie.genre] }</h6>
        <p className="card-text">{ movie.description }</p>
        <p className="card-text text-left text-muted">Visits: { movie.visits }</p>
      </div>
    </button>
    <hr />
    <div className="card-body p-0">
      <MovieLikes movie={ movie } />
    </div>
  </div>
);

export default withRouter(MovieCard);