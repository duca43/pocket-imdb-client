import React, { Component } from 'react';
import '../../styles/css/movies/movie_card.css'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Formik } from 'formik';
import { CommentSchema } from '../../validations/comment';
import { postComment } from '../../store/actions/MovieActions'

class LeaveComment extends Component {
  
  postComment = (comment) => {
    this.props.postComment({movie: this.props.movieId, comment});
  }

  render() {
    return (
      <Formik
        initialValues={{ comment: '' }} 
        validationSchema={ CommentSchema }
        onSubmit={values => this.postComment(values.comment)}
      >
        {({ errors, values, handleSubmit, handleChange }) => (
        <form noValidate onSubmit={ handleSubmit }>
          <div className="d-flex align-items-start">
            <div className="form-group col-10">
              <textarea
                rows="3"
                maxLength="500"
                name="comment"
                className={'form-control ' + (errors.comment && ' border border-danger')}
                placeholder="Share your thougths..."
                onChange={ handleChange }
                value={ values.comment }
                />
                <div className="d-flex justify-content-between mt-2">
                  <div>
                    <small className="text-danger">
                      { errors.comment }
                    </small>
                  </div>
                  <small className="text-muted">{ values.comment.length + ' / ' + 500 }</small>
                </div>
            </div>
            <div className="col-2">
              <input type="submit" value="Post comment" className="btn btn-primary col" />
            </div>
          </div>
        </form>
        )}
      </Formik>
    );
  }
}

const mapDispatchToProps = {
  postComment
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(LeaveComment)
);