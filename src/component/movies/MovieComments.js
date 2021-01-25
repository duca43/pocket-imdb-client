import React from 'react';
import '../../styles/css/movies/movie_card.css'
import LeaveComment from './LeaveComment';
import MovieCommentList from './MovieCommentList';

const MovieComments = ({ movieId, comments, loadMoreComments }) => (
  <div>
    <div className="d-flex mt-5 mb-3">
      <h3 className="col-auto">Leave comment</h3>
    </div>
    <LeaveComment movieId={ movieId } />
    <div className="d-flex">
      <h3 className="col">
        { 
          (comments.total === 0)
            ? 'There is no any comment about this movie. Be first to leave one :)' 
            : (comments.page === comments.total_pages)
              ? comments.results.length + ' ' + (comments.results.length === 1 ? 'comment' : 'comments') 
              : comments.results.length + ' of ' + comments.total + ' comments' 
        }
      </h3>
    </div>
    <MovieCommentList comments={ comments.results } />
    { comments.page < comments.total_pages &&
      <div className="d-flex justify-content-center my-3">
        <button className="btn btn-primary" onClick={() => loadMoreComments()}>
          <i className="fa fa-refresh mr-1" /> Load more
        </button>
      </div>
    }
  </div>
);

export default MovieComments;