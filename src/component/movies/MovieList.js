import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getMovies, getPopularMovies } from '../../store/actions/MovieActions';
import { getWatchlist, addToWatchlist, removeFromWatchlist } from '../../store/actions/WatchlistActions';
import Pagination from '../Pagination'
import MovieCard from './MovieCard'
import debounce from 'lodash/debounce'
import { MOVIE_GENRES } from '../../constants/movies'

class MovieList extends Component {

    componentDidMount() {
        this.retrieveMoviesByPage(this.props.movies.page);
        this.props.getWatchlist(this.props.userId);
        this.props.getPopularMovies();
    }
  
    retrieveMoviesByPage = (page) => {
        this.props.getMovies({page: page, search: this.props.searchBy, genre: this.props.genreFilter});
    }

    retrieveMoviesBySearch = debounce((searchBy) => {
        const searchByTrimmed = searchBy.trim().replace(/  +/g, ' ');
        if (searchByTrimmed !== this.props.searchBy) {
            this.props.getMovies({page: 1, search: searchBy, genre: this.props.genreFilter});
        }
    }, 750);

    retrieveMoviesByFilter = (genre) => {
        this.props.getMovies({page: 1, search: this.props.searchBy, genre: genre});
    }

    addMovieToWatchlist = (movieId) => {
        this.props.addToWatchlist({ userId: this.props.userId, movieId });
    }

    removeFromWatchlist = (movieId) => {
        const watchlistMovieId = this.props.watchlist.find(watchlistMovie => watchlistMovie.movie.id === movieId).id
        this.props.removeFromWatchlist({ userId: this.props.userId, watchlistMovieId, movieId });
    }

    render() {
        return (
            <div>
                <h3 className="text-center mt-3">Movies</h3>
                <div className="container-fluid d-flex justify-content-between mt-5">
                    <div className="form-group col-2">
                        <select id="genreFilter" className="form-control" onChange={event => this.retrieveMoviesByFilter(event.target.value)}>
                            <option value=''>Any</option>
                            {Object.keys(MOVIE_GENRES).map((key) => (
                                <option key={ key } value={ key }>{ MOVIE_GENRES[key] }</option>
                            ))}
                        </select>
                    </div>
                    <input
                        className="form-control col-5"
                        placeholder="Search..."
                        defaultValue={ this.props.searchBy }
                        onChange={event => this.retrieveMoviesBySearch(event.target.value)} />
                    <Pagination currentPage={ this.props.movies.page } 
                        totalPages={ this.props.movies.total_pages }
                        paginate={ this.retrieveMoviesByPage } />
                </div>
                <div className="row">
                    <div className="col-2">
                        <div className="list-group m-3 w-100">
                            <h5 className="text-center mb-3">Top 10 movies</h5>
                            {this.props.popularMovies.map(movie => 
                                <button 
                                    key={ movie.id } 
                                    className="list-group-item list-group-item-action"
                                    onClick={ () => this.props.history.push('/movie/' + movie.id) }>
                                    { movie.title }
                                    <span className="pull-right"><i className="fa fa-thumbs-up text-primary" /> { movie.likes }</span> 
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="col-10">
                        <div className="row">
                            {this.props.movies.results.map(movie => 
                                <div className="my-3 mx-5 col-3" key={movie.id}>
                                    <MovieCard 
                                        movie={ movie } 
                                        addMovieToWatchlist={ this.addMovieToWatchlist }
                                        removeFromWatchlist = { this.removeFromWatchlist } />
                                </div>
                            )}                    
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
      movies: state.movie.movies,
      searchBy: state.movie.searchBy,
      genreFilter: state.movie.genreFilter,
      userId: state.authUser.id,
      watchlist: state.watchlist.all,
      popularMovies: state.movie.popularMovies
    };
};

const mapDispatchToProps = {
    getMovies,
    addToWatchlist,
    getWatchlist,
    removeFromWatchlist,
    getPopularMovies
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieList));