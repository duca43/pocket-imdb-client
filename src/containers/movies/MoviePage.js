import React, { Component } from 'react';
import '../../styles/css/movies/movie_card.css'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getMovie, incrementVisits, getRelatedMovies } from '../../store/actions/MovieActions';
import { MOVIE_GENRES } from '../../constants/movies'
import MovieLikes from '../../component/movies/MovieLikes';

class MoviePage extends Component {
  
  componentDidMount() {
    this.loadMovieData(this.props.match.params.id);
  }

  loadMovieData = movieId => {
    this.props.getMovie(movieId);
    this.props.incrementVisits(movieId);
    this.props.getRelatedMovies(movieId);
  }

  render() {

    return (
      <div>
        <div className="card">
          <div className="row">
            <div className="embed-responsive embed-responsive-4by3 col-4">
                <img className="card-img-top embed-responsive-item" src={ this.props.movie.cover_image_url } alt="Not available :(" />
            </div>
            <div className="card-body col-8">
                <p className="card-title display-4">{ this.props.movie.title }</p>
                <h2 className="card-subtitle mb-3 text-muted">{ MOVIE_GENRES[this.props.movie.genre] }</h2>
                <p className="card-text">{ this.props.movie.description }</p>
                <p className="card-text text-muted">Visits: { this.props.movie.visits }</p>
                <div className="w-25 mt-5">
                  <MovieLikes movie={ this.props.movie } />
                </div>
            </div>
          </div>
        </div>
        <div className="row">
            <div className="col-2">
              <div className="list-group m-3 w-100">
                  <h5 className="text-center mb-3">Related movies</h5>
                  {this.props.relatedMovies.length > 0 ? this.props.relatedMovies.map(movie => 
                      <button 
                          key={ movie.id } 
                          className="list-group-item list-group-item-action"
                          onClick={ () => {
                              this.props.history.push('/movie/' + movie.id);
                              this.loadMovieData(movie.id);
                            } 
                          }>
                          { movie.title }
                      </button>
                  ) : <p className="text-center">There is no any related movie <i className="fa fa-frown-o"></i></p> 
                  }
              </div>               
            </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movie: state.movie.currentMovie,
    relatedMovies: state.movie.relatedMovies
  };
};

const mapDispatchToProps = {
  getMovie,
  incrementVisits,
  getRelatedMovies
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MoviePage)
);
