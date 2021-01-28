import React from 'react';
import '../../styles/css/movies/movie_card.css'
import { MOVIE_GENRES } from '../../constants/movies'

const MovieWatchlistCard = ({ movieWatch, markAsWatched, removeFromWatchlist }) => (
  <div className="card text-center">
    <div className="embed-responsive embed-responsive-4by3">
      <img className="card-img-top embed-responsive-item" src={ movieWatch.movie.cover_image_url } alt="Not available :(" />
    </div>
    <div className="card-body">
      <h4 className="card-title">{ movieWatch.movie.title }</h4>
      <h6 className="card-subtitle mb-3 text-muted">{ MOVIE_GENRES[movieWatch.movie.genre] }</h6>
      <p className="card-text">{ movieWatch.movie.description }</p>
    </div>
    <div className="card-footer d-flex justify-content-between">
      <div className="form-check my-auto">
        <input
          type='checkbox'
          className='form-check-input'
          id={'watched' + (movieWatch.id)}
          checked={ movieWatch.is_watched }
          onChange={() => markAsWatched(movieWatch.id)}
          />
        <label className="form-check-label" htmlFor={'watched' + (movieWatch.id)}>Watched</label>
      </div>
      <button className="btn text-primary" onClick={() => removeFromWatchlist(movieWatch.id)}>
        <i className="fa fa-times mr-1"/> Remove
      </button>
    </div>
  </div>
);

export default MovieWatchlistCard;
