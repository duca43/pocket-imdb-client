import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logIn } from '../../store/actions/AuthActions';
import { Formik } from "formik";
import { LoginSchema } from '../../validations/login';

class Login extends Component {
  
  submit = values => {
    this.props.logIn(values);
  };

  render() {
    return (
      <Formik
        initialValues={{ 
          email: '',
          password: ''
        }}
        validationSchema = { LoginSchema } 
        onSubmit={values => this.submit(values)}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit
       }) => (
        <div className="row justify-content-center">
          <form onSubmit={handleSubmit} className="mt-5 w-25">
            <h2 className="text-center mb-4">Log In</h2>
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                />
              {errors.email && touched.email && errors.email}
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                />
            </div>
            <div className="row justify-content-center my-3">
              <input type="submit" value="Log in" className="btn btn-primary" />
            </div>
            <div className="row justify-content-center mt-4">
              {this.props.loginError.hasError && <p>{this.props.loginError.message}</p>}
            </div>
          </form>
        </div>
       )}
     </Formik>
    );
  }
}

const mapStateToProps = state => {
  return {
    loginError: state.error.loginError
  };
};

const mapDispatchToProps = {
  logIn
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
