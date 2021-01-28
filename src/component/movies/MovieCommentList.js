import React from 'react';
import MovieCommendCard from './MovieCommentCard';

const MovieCommentList = ({ comments }) => (
  <div>
    <div className="d-flex">
        <div className="col">
          { comments.map(comment => <MovieCommendCard key={ comment.id } comment={ comment } /> )}
        </div>
    </div>
  </div>
);

export default MovieCommentList;
