import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getMovie, incrementVisits, getComments, getRelatedMovies } from '../../store/actions/MovieActions';
import { getWatchlist, addToWatchlist, removeFromWatchlist } from '../../store/actions/WatchlistActions';
import MoviePageCard from '../../component/movies/MoviePageCard';
import MovieComments from '../../component/movies/MovieComments';

class MoviePage extends Component {
  
  componentDidMount() {
    this.loadMovieData(this.props.match.params.id);
  }

  loadMovieData = movieId => {
    this.props.getMovie(movieId);
    this.props.incrementVisits(movieId);
    this.props.getWatchlist(this.props.userId);
    this.props.getComments({movie: movieId, page: 1});
    this.props.getRelatedMovies(movieId);
  }

  addMovieToWatchlist = (movieId) => {
    this.props.addToWatchlist({ userId: this.props.userId, movieId });
  }

  removeFromWatchlist = (movieId) => {
    const watchlistMovieId = this.props.watchlist.find(watchlistMovie => watchlistMovie.movie.id === movieId).id
    this.props.removeFromWatchlist({ userId: this.props.userId, watchlistMovieId, movieId });
  }

  loadMoreComments = () => {
    this.props.getComments({movie: this.props.match.params.id, page: this.props.comments.page + 1});
  }

  render() {
    if (!this.props.movie.id) {
      return <div />
    }
    return (
      <div className="container mt-3">
        <MoviePageCard 
          movie={ this.props.movie }
          addMovieToWatchlist={ this.addMovieToWatchlist }
          removeFromWatchlist={ this.removeFromWatchlist } />

        <div className="row">
          <div className="col-2">
            <div className="list-group m-3 w-100">
                <h5 className="text-center mb-3">Related movies</h5>
                {this.props.relatedMovies.length > 0 ? this.props.relatedMovies.map(movie => 
                    <button 
                        key={ movie.id } 
                        className="list-group-item list-group-item-action"
                        onClick={ () => {
                            this.props.history.push('/movie/' + movie.id);
                            this.loadMovieData(movie.id);
                          } 
                        }>
                        { movie.title }
                    </button>
                ) : <p className="text-center">There is no any related movie <i className="fa fa-frown-o"></i></p> 
                }
            </div>               
          </div>
          <div className="col-10">
            <MovieComments 
              movieId={ this.props.movie.id } 
              comments={ this.props.comments } 
              loadMoreComments={ this.loadMoreComments }
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movie: state.movie.currentMovie,
    comments: state.movie.comments,
    userId: state.authUser.id,
    watchlist: state.watchlist.all,
    relatedMovies: state.movie.relatedMovies
  };
};

const mapDispatchToProps = {
  getMovie,
  incrementVisits,
  getComments,
  getWatchlist,
  addToWatchlist,
  removeFromWatchlist,
  getRelatedMovies
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MoviePage)
);
