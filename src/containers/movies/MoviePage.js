import React, { Component } from 'react';
import '../../styles/css/movies/movie_card.css'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getMovie } from '../../store/actions/MovieActions';
import { MOVIE_GENRES } from '../../constants/movies'
import MovieFeedback from '../../component/movies/MovieFeedback';

class MoviePage extends Component {
  
  componentDidMount() {
    this.props.getMovie(this.props.match.params.id);
  }

  render() {

    return (
      <div className="card">
        <div className="row">
          <div className="embed-responsive embed-responsive-4by3 col-4">
              <img className="card-img-top embed-responsive-item" src={ this.props.movie.cover_image_url } alt="Not available :(" />
          </div>
          <div className="card-body col-8">
              <p className="card-title display-4">{ this.props.movie.title }</p>
              <h2 className="card-subtitle mb-3 text-muted">{ MOVIE_GENRES[this.props.movie.genre] }</h2>
              <p className="card-text">{ this.props.movie.description }</p>
              <div className="w-25 mt-5">
                <MovieFeedback movie={ this.props.movie } />
              </div>
          </div>
        </div>
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
  getMovie
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MoviePage)
);
