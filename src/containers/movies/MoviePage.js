import React, { Component } from 'react';
import '../../styles/css/movies/movie_card.css'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getMovie, incrementVisits, getWatchlist, addToWatchlist } from '../../store/actions/MovieActions';
import { MOVIE_GENRES } from '../../constants/movies'
import MovieLikes from '../../component/movies/MovieLikes';

class MoviePage extends Component {
  
  componentDidMount() {
    this.props.getMovie(this.props.match.params.id);
    this.props.incrementVisits(this.props.match.params.id);
    this.props.getWatchlist();
  }

  addMovieToWatchlist = (movieId) => {
    this.props.addToWatchlist({ watchListId: this.props.watchlist.id, movieId });
  }

  render() {

    return (
      <div className="card">
        <div className="row">
          <div className="embed-responsive embed-responsive-4by3 col-4">
              <img className="card-img-top embed-responsive-item" src={ this.props.movie.cover_image_url } alt="Not available :(" />
          </div>
          <div className="card-body col-8">
              { this.props.movie.user_watched &&
                <div className="d-flex justify-content-end pb-2 pr-3">
                  <span className='badge badge-pill badge-success badge-big'>
                      Watched <i className="fa fa-check"></i>
                  </span>
                </div>
              }
              <p className="card-title display-4">{ this.props.movie.title }</p>
              <h2 className="card-subtitle mb-3 text-muted">{ MOVIE_GENRES[this.props.movie.genre] }</h2>
              <p className="card-text">{ this.props.movie.description }</p>
              <p className="card-text text-muted">Visits: { this.props.movie.visits }</p>
              <div className="w-25 mt-5">
                <MovieLikes movie={ this.props.movie } />
              </div>
              { !this.props.movie.in_user_watch_list &&
                <button className="btn text-primary" onClick={ () => this.addMovieToWatchlist(this.props.movie.id) }>
                  <i className="fa fa-plus mr-1"/> Add to watchlist
                </button>
              }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movie: state.movie.currentMovie,
    watchlist: state.movie.watchlist
  };
};

const mapDispatchToProps = {
  getMovie,
  incrementVisits,
  getWatchlist,
  addToWatchlist
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MoviePage)
);
