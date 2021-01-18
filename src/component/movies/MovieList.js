import React from 'react';
import Pagination from '../Pagination'
import MovieCard from '../MovieCard'

const MovieList = ({ movies, retrieveMovies }) => {

    return (
        <div>
        <h3 className="text-center mt-3">Movies</h3>
            <Pagination currentPage={ movies.page } 
                        totalPages={ movies.total_pages }
                        paginate={ retrieveMovies } />
            <div className="row">
            { movies.results.map(movie => <MovieCard key={movie.id} movie={movie} />) }
            </div>
        </div>
    );
};

export default MovieList;
