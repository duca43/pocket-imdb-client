import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFeedback } from '../../store/actions/MovieFeedbackActions';
import '../../styles/css/movies/movie_feedback.css'

class MovieFeedback extends Component {
  
    addFeedback = (feedback) => {
        if (this.props.movie.user_feedback !== null) {
            return;
        }
        this.props.addFeedback({movie: this.props.movie.id, feedback: feedback});
    }

    render() {
        
        const likes = this.props.movie.likes;
        const dislikes = this.props.movie.dislikes;
        const likesPercentage = likes === 0 ? 0 : (dislikes === 0 ? 100 : parseInt(likes / (likes + dislikes) * 100, 10));
        
        return (
            <div className="row justify-content-center">
                <div>
                    <button className="btn" onClick={() => this.addFeedback(true)}>
                        <i className={'fa fa-thumbs-up bigger-icon ' + (this.props.movie.user_feedback && 'text-primary')} />
                    </button>
                    <p className="text-center">{ likes }</p>
                </div>
                <div className="progress mt-3 w-50">
                    <div className={'progress-bar ' + (this.props.movie.user_feedback === null && 'bg-dark') } 
                        style={{width: likesPercentage + '%' }} />
                </div>
                <div>
                    <button className="btn" onClick={() => this.addFeedback(false)}>
                    <i 
                        className={'fa fa-thumbs-down bigger-icon ' + (this.props.movie.user_feedback === false && 'text-primary')} 
                    />
                    </button>
                    <p className="text-center">{ dislikes }</p>
                </div>
            </div>
        );
    }
};

const mapDispatchToProps = {
    addFeedback
};

export default connect(null, mapDispatchToProps)(MovieFeedback);