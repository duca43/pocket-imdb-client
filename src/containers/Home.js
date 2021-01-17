import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getMovies } from '../store/actions/MovieActions';
import MovieCard from '../component/MovieCard';
import { range } from 'lodash';

class Home extends Component {

  componentDidMount() {
    this.retrieveMovies(this.props.movies.page);
  }

  renderMovies = moviesToDisplay => {
    return moviesToDisplay.map(movie => <MovieCard key={movie.id} movie={movie} />);
  };

  retrieveMovies = page => {
    this.props.getMovies(page);
  }

  render() {
    const { movies } = this.props;

    if (!movies.results) {
      return (<div />)
    }

    const totalPages = Math.ceil(movies.total / movies.page_size);
    const pages = []

    if (totalPages < 3) {
      for (let i in range(1, totalPages + 1)) {
        pages.push(i);
      }
    } else {
      if (movies.page === 1) {
        pages.push(...[movies.page, movies.page + 1, movies.page + 2]);
      } else if (movies.page === totalPages) {
        pages.push(...[movies.page - 2, movies.page - 1, movies.page]);
      } else {
        pages.push(...[movies.page - 1, movies.page, movies.page + 1]);
      }
    }

    return (
      <div>
        <h1 className="text-center mt-4">Welcome to Pocket IMDb</h1>
        <h3 className="text-center mt-3">Movies</h3>
        <nav className="mr-5">
          <ul className="pagination justify-content-end">
            <li className={"page-item " + (movies.page === 1 && 'disabled')}>
              <button className="page-link" onClick={() => this.retrieveMovies(1)}>First</button> 
            </li>
            <li className={"page-item " + (movies.page === 1 && 'disabled')}>
              <button className="page-link" onClick={() => this.retrieveMovies(movies.page - 1)}>&laquo;</button>
            </li>
            {pages.map(number =>
              <li key={ number } className="page-item">
                <button className={"page-link " + (movies.page === number && 'text-dark')}
                        onClick={() => this.retrieveMovies(number)}>
                  { number }
                </button>
              </li>
            )}
            <li className={"page-item " + (movies.page === totalPages && 'disabled')}>
              <button className="page-link" onClick={() => this.retrieveMovies(movies.page + 1)}>&raquo;</button>
            </li>
            <li className={"page-item " + (movies.page === totalPages && 'disabled')}>
              <button className="page-link" onClick={() => this.retrieveMovies(totalPages)}>Last</button>
            </li>
          </ul>
        </nav>
        <div className="row">
          {this.renderMovies(movies.results)}
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
