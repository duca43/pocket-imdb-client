import React from 'react';
import '../../styles/css/movies/movie_card.css'
import { MOVIE_GENRES } from '../../constants/movies'
import MovieLikes from './MovieLikes';

const MoviePageCard = ({ movie }) => (
  <div className="card my-3">
    <div className="container-fluid row">
      <div className="embed-responsive embed-responsive-4by3 col-3">
          <img className="card-img-top embed-responsive-item" src={ movie.cover_image_url } alt="Not available :(" />
      </div>
      <div className="card-body col-9 pr-0">
          <div className="w-25 pull-right">
            <MovieLikes movie={ movie } />
          </div>
          <h2 className="card-title">{ movie.title }</h2>
          <h5 className="card-subtitle mb-3 text-muted">{ MOVIE_GENRES[movie.genre] }</h5>
          <p className="card-text">{ movie.description }</p>
          <p className="card-text text-muted bottom-right">Visits: { movie.visits }</p>
      </div>
    </div>
  </div>
);

export default MoviePageCard;
