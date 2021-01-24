import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getMovie, incrementVisits } from '../../store/actions/MovieActions';
import MoviePageCard from '../../component/movies/MoviePageCard';
import MovieComments from '../../component/movies/MovieComments';

class MoviePage extends Component {
  
  componentDidMount() {
    this.props.getMovie(this.props.match.params.id);
    this.props.incrementVisits(this.props.match.params.id);
  }

  render() {
    if (!this.props.movie.id) {
      return <div />
    }
    return (
      <div className="container">
        <MoviePageCard movie={ this.props.movie } />
        <MovieComments movieId={ this.props.movie.id } comments={ this.props.movie.movie_comments } />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movie: state.movie.currentMovie
  };
};

const mapDispatchToProps = {
  getMovie,
  incrementVisits
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MoviePage)
);
