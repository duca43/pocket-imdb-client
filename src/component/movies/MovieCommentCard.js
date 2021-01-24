import React from 'react';
import '../../styles/css/movies/movie_card.css'

const MovieCommendCard = ({ comment }) => (
  <div className="card py-3 px-4 my-4">
      <div className="d-flex justify-content-between align-items-center">
        <p className="font-weight-bold text-primary">{ comment.user }</p> 
        <p className="text-muted">{ comment.timestamp }</p> 
      </div>
      <p className="font-weight-bold">{ comment.content }</p>
  </div>
);

export default MovieCommendCard;
