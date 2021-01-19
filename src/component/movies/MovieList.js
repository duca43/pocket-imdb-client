import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../../store/actions/MovieActions';
import Pagination from '../Pagination'
import MovieCard from '../MovieCard'
import debounce from 'lodash/debounce'

class MovieList extends Component {

    componentDidMount() {
        this.retrieveMoviesByPage(this.props.movies.page);
    }
  
    retrieveMoviesByPage = (page) => {
        this.props.getMovies({page: page, search: this.props.searchBy});

    retrieveMoviesBySearch = debounce((searchBy) => {
        const searchByTrimmed = searchBy.trim().replace(/  +/g, ' ');
        if (searchByTrimmed !== this.props.searchBy) {
            this.props.getMovies({page: 1, search: searchBy});
        }
    }, 750);

    render() {
        return (
            <div>
            <h3 className="text-center mt-3">Movies</h3>
                <div className="row justify-content-center mt-5">
                    <input
                        className="form-control col-4"
                        placeholder="Search..."
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