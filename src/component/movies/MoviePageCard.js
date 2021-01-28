import React from 'react';
import '../../styles/css/movies/movie_card.css'
import { MOVIE_GENRES } from '../../constants/movies'
import MovieLikes from './MovieLikes';

const MoviePageCard = ({ movie, addMovieToWatchlist, removeFromWatchlist }) => (
  <div className="card">
    <div className="row">
      <div className="embed-responsive embed-responsive-4by3 col-4">
          <img className="card-img-top embed-responsive-item" src={ movie.cover_image_url } alt="Not available :(" />
      </div>
      <div className="card-body col-8">
          { movie.did_user_watch &&
            <div className="d-flex justify-content-end pb-2 pr-3">
              <span className='badge badge-pill badge-success badge-big'>
                  Watched <i className="fa fa-check"></i>
              </span>
            </div>
          }
          <p className="card-title display-4">{ movie.title }</p>
          <h2 className="card-subtitle mb-3 text-muted">{ MOVIE_GENRES[movie.genre] }</h2>
          <p className="card-text">{ movie.description }</p>
          <p className="card-text text-muted">Visits: { movie.visits }</p>
          <div className="w-25 mt-5">
            <MovieLikes movie={ movie } />
          </div>
          { !movie.is_in_user_watchlist &&
            <button className="btn text-primary" onClick={ () => addMovieToWatchlist(movie.id) }>
              <i className="fa fa-plus mr-1"/> Add to watchlist
            </button>
          }
          { movie.is_in_user_watchlist &&
            <button className="btn text-primary" onClick={ () => removeFromWatchlist(movie.id) }>
              <i className="fa fa-times mr-1"/> Remove from watchlist
            </button>
          }
      </div>
    </div>
  </div>
);

export default MoviePageCard;
