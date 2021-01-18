import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../../store/actions/MovieActions';
import Pagination from '../Pagination'
import MovieCard from '../MovieCard'
import { DebounceInput } from 'react-debounce-input';

class MovieList extends Component {

    componentDidMount() {
        this.retrieveMoviesByPage(this.props.movies.page);
    }

    retrieveMoviesByPage = (page) => {
        this.props.getMovies({page: page, search: this.props.searchBy});
    }

    retrieveMoviesBySearch = (searchBy) => {
        this.props.getMovies({page: 1, search: searchBy});
    }

    render() {
        return (
            <div>
            <h3 className="text-center mt-3">Movies</h3>
                <div className="row justify-content-center mt-5">
                    <DebounceInput
                        className="form-control col-4"
                        placeholder="Search..."
                        debounceTimeout={ 750 }
                        onChange={event => this.retrieveMoviesBySearch(event.target.value)} />
                </div>
                    <Pagination currentPage={ this.props.movies.page } 
                            totalPages={ this.props.movies.total_pages }
                            paginate={ this.retrieveMoviesByPage } />
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
      searchBy: state.movie.searchBy
    };
};

const mapDispatchToProps = {
    getMovies
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);