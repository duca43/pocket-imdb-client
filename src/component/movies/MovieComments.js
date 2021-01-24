import React from 'react';
import LeaveComment from './LeaveComment';
import MovieCommentList from './MovieCommentList';

const MovieComments = ({ movieId, comments }) => (
  <div>
    <div className="d-flex mt-5 mb-3">
      <h3 className="col-auto">Leave comment</h3>
    </div>
    <LeaveComment movieId={ movieId } />
    <div className="d-flex">
      <h3 className="col">
        { 
          comments.length === 0 
            ? 'There is no any comment about this movie. Be first to leave one :)' 
            : comments.length + ' ' + (comments.length === 1 ? 'comment' : 'comments') 
        }
      </h3>
    </div>
    <MovieCommentList comments={ comments } />
  </div>
);

export default MovieComments;
