import React, { Component } from 'react';
import '../../styles/css/movies/movie_card.css'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getWatchlist, updateWatched, removeFromWatchlist } from '../../store/actions/WatchlistActions';
import MovieWatchlistCard from '../../component/movies/MovieWatchlistCard';

class MoviePage extends Component {
  
  componentDidMount() {
    this.props.getWatchlist(this.props.userId);
  }

  markAsWatched = (watchlistMovieId) => {
    const watched = this.props.watchlist.find(watchlistMovie => watchlistMovie.id === watchlistMovieId).is_watched;
    this.props.updateWatched({ userId: this.props.userId, watchlistMovieId, watched: !watched });
  }

  removeFromWatchlist = (watchlistMovieId) => {
    this.props.removeFromWatchlist({ userId: this.props.userId, watchlistMovieId });
  }

  render() {

    return (
      <div className="container">
        <h3 className="text-center my-4">Your Watchlist</h3>
        <div className="row justify-content-between">
            {this.props.watchlist.map(movieWatch => 
                <div className="my-3 mx-3 col-5" key={ movieWatch.id }>
                    <MovieWatchlistCard 
                      movieWatch={ movieWatch } 
                      markAsWatched={ this.markAsWatched }
                      removeFromWatchlist = { this.removeFromWatchlist } />
                </div>
            )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    watchlist: state.watchlist.all,
    userId: state.authUser.id
  };
};

const mapDispatchToProps = {
  getWatchlist,
  updateWatched,
  removeFromWatchlist
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MoviePage)
);
