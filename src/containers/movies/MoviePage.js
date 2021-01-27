import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getMovie, incrementVisits, getComments } from '../../store/actions/MovieActions';
import { getWatchlist, addToWatchlist, removeFromWatchlist } from '../../store/actions/WatchlistActions';
import MoviePageCard from '../../component/movies/MoviePageCard';
import MovieComments from '../../component/movies/MovieComments';

class MoviePage extends Component {
  
  componentDidMount() {
    this.props.getMovie(this.props.match.params.id);
    this.props.incrementVisits(this.props.match.params.id);
    this.props.getWatchlist(this.props.userId);
    this.props.getComments({movie: this.props.match.params.id, page: 1});
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
        <MovieComments 
          movieId={ this.props.movie.id } 
          comments={ this.props.comments } 
          loadMoreComments={ this.loadMoreComments }
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movie: state.movie.currentMovie,
    comments: state.movie.comments,
    userId: state.authUser.id,
    watchlist: state.watchlist.all
  };
};

const mapDispatchToProps = {
  getMovie,
  incrementVisits,
  getComments,
  getWatchlist,
  addToWatchlist,
  removeFromWatchlist
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MoviePage)
);
