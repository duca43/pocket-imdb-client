import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getMovie, incrementVisits, getComments } from '../../store/actions/MovieActions';
import MoviePageCard from '../../component/movies/MoviePageCard';
import MovieComments from '../../component/movies/MovieComments';

class MoviePage extends Component {
  
  componentDidMount() {
    this.props.getMovie(this.props.match.params.id);
    this.props.incrementVisits(this.props.match.params.id);
    this.loadMoreComments();
  }

  loadMoreComments = () => {
    this.props.getComments({movie: this.props.match.params.id, page: this.props.comments.page + 1});
  }

  render() {
    if (!this.props.movie.id) {
      return <div />
    }
    return (
      <div className="container">
        <MoviePageCard movie={ this.props.movie } />
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
    comments: state.movie.comments
  };
};

const mapDispatchToProps = {
  getMovie,
  incrementVisits,
  getComments
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MoviePage)
);
