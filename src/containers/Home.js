import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getMovies } from '../store/actions/MovieActions';
import MovieCard from '../component/MovieCard';

class Home extends Component {
  componentDidMount() {
    this.props.getMovies();
  }

  renderMovies = () => {
    return this.props.movies.map(movie => <MovieCard key={movie.id} movie={movie} />);
  };

  render() {
    return (
      <div>
        <h1 className="text-center my-2">Welcome to Pocket IMDb</h1>
        <h4 className="text-center mt-3">Movies</h4>
        <div className="row">
          {this.renderMovies()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movie.all
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
