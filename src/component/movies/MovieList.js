import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../../store/actions/MovieActions';
import Pagination from '../Pagination'
import MovieCard from '../MovieCard'

class MovieList extends Component {

    componentDidMount() {
        this.retrieveMovies(this.props.movies.page);
    }
    
    retrieveMovies = page => {
        this.props.getMovies(page);
    }

    render() {
        return (
            <div>
            <h3 className="text-center mt-3">Movies</h3>
                <Pagination currentPage={ this.props.movies.page } 
                            totalPages={ this.props.movies.total_pages }
                            paginate={ this.retrieveMovies } />
                <div className="row">
                { this.props.movies.results.map(movie => <MovieCard key={movie.id} movie={movie} />) }
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
      movies: state.movie.movies
    };
};

const mapDispatchToProps = {
    getMovies
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);