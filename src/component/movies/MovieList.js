import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../../store/actions/MovieActions';
import Pagination from '../Pagination'
import MovieCard from '../MovieCard'
import debounce from 'lodash/debounce'
import { MOVIE_GENRES } from '../../constants/movies'

class MovieList extends Component {

    componentDidMount() {
        this.retrieveMoviesByPage(this.props.movies.page);
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
                        onChange={event => this.retrieveMoviesBySearch(event.target.value)} />
                    <Pagination currentPage={ this.props.movies.page } 
                        totalPages={ this.props.movies.total_pages }
                        paginate={ this.retrieveMoviesByPage } />
                </div>
                <div className="row">
                { this.props.movies.results.map(movie => <MovieCard key={movie.id} movie={movie} />) }
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
      movies: state.movie.movies,
      searchBy: state.movie.searchBy,
      genreFilter: state.movie.genreFilter
    };
};

const mapDispatchToProps = {
    getMovies
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);