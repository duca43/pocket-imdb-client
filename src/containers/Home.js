import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getMovies } from '../store/actions/MovieActions';
import MovieList from '../component/movies/MovieList';

class Home extends Component {

  componentDidMount() {
    this.retrieveMovies(this.props.movies.page);
  }

  retrieveMovies = page => {
    this.props.getMovies(page);
  }

  render() {
    return (
      <div>
        <h1 className="text-center mt-4">Welcome to Pocket IMDb</h1>
        <MovieList movies={ this.props.movies } retrieveMovies={ this.retrieveMovies } />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movie.movies
  };
};

const mapDispatchToProps = {
  getMovies
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
