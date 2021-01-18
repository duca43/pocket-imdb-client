import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MovieList from '../component/movies/MovieList';

class Home extends Component {

  render() {
    return (
      <div>
        <h1 className="text-center mt-4">Welcome to Pocket IMDb</h1>
        <MovieList />
      </div>
    );
  }
}

export default withRouter(Home);