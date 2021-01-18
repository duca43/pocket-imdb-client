import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getMovies } from '../store/actions/MovieActions';
import MovieCard from '../component/MovieCard';
import Pagination from '../component/Pagination';

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
        <h3 className="text-center mt-3">Movies</h3>
        <Pagination currentPage={ this.props.movies.page } 
                    totalPages={ this.props.movies.total_pages }
                    paginate={ this.retrieveMovies } />
        <div className="row">
          { this.props.movies.results.map(movie => <MovieCard key={movie.id} movie={movie} />) }
        </div>
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
