import React, { Component } from 'react';
import '../../styles/css/movies/movie_card.css'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getWatchlist, updateWatched, removeFromWatchlist } from '../../store/actions/MovieActions';
import MovieWatchlistCard from '../../component/movies/MovieWatchlistCard';

class MoviePage extends Component {
  
  componentDidMount() {
    this.props.getWatchlist();
  }

  markAsWatched = (movieId) => {
    const watched = this.props.watchlist.movies.find(movieWatch => movieWatch.movie.id === movieId).watched;
    this.props.updateWatched({ watchListId: this.props.watchlist.id, movieId, watched: !watched });
  }

  removeFromWatchlist = (movieId) => {
    this.props.removeFromWatchlist({ watchListId: this.props.watchlist.id, movieId });
  }

  render() {

    return (
      <div className="container">
        <h3 className="text-center my-4">Your Watchlist</h3>
        <div className="row justify-content-between">
            {this.props.watchlist.movies.map(movieWatch => 
                <div className="my-3 mx-3 col-5" key={ movieWatch.movie.id }>
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
    watchlist: state.movie.watchlist
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
