import React from 'react';
import '../styles/css/movies/movie_card.css'
import { MOVIE_GENRES } from '../constants/movies'

const MovieCard = ({ movie }) => {
  return (
    <div className="card my-3 mx-5 col-3">
      <div className="embed-responsive embed-responsive-4by3">
        <img className="card-img-top embed-responsive-item" src={ movie.cover_image_url } alt="Not available :(" />
      </div>
      <div className="card-body">
        <h4 className="card-title">{ movie.title }</h4>
        <h6 className="card-subtitle mb-3 text-muted">{ MOVIE_GENRES[movie.genre] }</h6>
        <p className="card-text">{ movie.description }</p>
      </div>
    </div>
  );
};

export default MovieCard;
