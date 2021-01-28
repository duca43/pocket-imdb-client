import React from 'react';
import '../../styles/css/movies/movie_card.css'
import { getTimestampRelativeDiff } from '../../util/date'

const MovieCommendCard = ({ comment }) => (
  <div className="card py-3 px-4 my-4">
      <div className="d-flex justify-content-between align-items-center">
        <p className="font-weight-bold text-primary">{ comment.user.email }</p> 
        <p className="text-muted">{ getTimestampRelativeDiff(comment.created_at) }</p>
      </div>
      <p>{ comment.content }</p>
  </div>
);

export default MovieCommendCard;
