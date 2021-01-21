import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addLike, removeLike, flipLike } from '../../store/actions/MovieActions';
import '../../styles/css/movies/movie_like.css'

class MovieLikes extends Component {
  
    performLike = (like) => {
        if (this.props.movie.user_liked_or_disliked === 0) {
            this.props.addLike({movie: this.props.movie.id, like: like});
        }
        else if (this.props.movie.user_liked_or_disliked === like) {
            this.props.removeLike({movie: this.props.movie.id, like: like});
        } else {
            this.props.flipLike({movie: this.props.movie.id, like: like});
        }
    }

    render() {
        
        const likes = this.props.movie.likes;
        const dislikes = this.props.movie.dislikes;
        const likesPercentage = likes === 0 ? 0 : (dislikes === 0 ? 100 : parseInt(likes / (likes + dislikes) * 100, 10));
        
        return (
            <div className="row justify-content-center">
                <div>
                    <button className="btn" onClick={() => this.performLike(1)}>
                        <i className={'fa fa-thumbs-up bigger-icon ' + (this.props.movie.user_liked_or_disliked === 1 && 'text-primary')} />
                    </button>
                    <p className="text-center">{ likes }</p>
                </div>
                <div className="progress mt-3 w-50">
                    <div className={'progress-bar ' + (this.props.movie.user_liked_or_disliked === 0 && 'bg-dark') } 
                        style={{width: likesPercentage + '%' }} />
                </div>
                <div>
                    <button className="btn" onClick={() => this.performLike(-1)}>
                    <i 
                        className={'fa fa-thumbs-down bigger-icon ' + (this.props.movie.user_liked_or_disliked === -1 && 'text-primary')} 
                    />
                    </button>
                    <p className="text-center">{ dislikes }</p>
                </div>
            </div>
        );
    }
};

const mapDispatchToProps = {
    addLike,
    removeLike,
    flipLike
};

export default connect(null, mapDispatchToProps)(MovieLikes);