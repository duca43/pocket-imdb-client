import React from 'react';
import '../../styles/css/movies/movie_card.css'
import { MOVIE_GENRES } from '../../constants/movies'
import { withRouter } from 'react-router-dom';
import MovieLikes from './MovieLikes';

const MovieCard = ({ movie, history, addMovieToWatchlist, removeFromWatchlist }) => (
  <div className="card text-center">
    <div className="embed-responsive embed-responsive-4by3">
      <img className="card-img-top embed-responsive-item" src={ movie.cover_image_url } alt="Not available :(" />
    </div>
    <div className="card-body pb-0">
      { movie.did_user_watch &&
        <div className="d-flex justify-content-end pb-2">
          <span className='badge badge-pill badge-success'>
              Watched <i className="fa fa-check"></i>
          </span>
        </div>
      }
      <h4 className="card-title">{ movie.title }</h4>
      <h6 className="card-subtitle mb-3 text-muted">{ MOVIE_GENRES[movie.genre] }</h6>
      <p className="card-text">{ movie.description }</p>
    </div>
    <div className="card-body pb-0">
      <MovieLikes movie={ movie } />
    </div>
    <div className="d-flex justify-content-between pl-3">
        <p className="card-text text-muted my-auto">Visits: { movie.visits }</p>
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
        <button className="btn text-primary" onClick={ () => history.push('/movie/' + movie.id) }>
          <i className="fa fa-arrow-right mr-1"/> Details
        </button>
      </div>
  </div>
);

export default withRouter(MovieCard);
