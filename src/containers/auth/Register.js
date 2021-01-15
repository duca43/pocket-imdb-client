import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { register } from '../../store/actions/AuthActions';
import { Formik } from "formik";
import { RegistrationSchema } from '../../validations/registration';

class Register extends Component {
  
  submit = values => {
    this.props.register(values);
  };

  render() {
    return (
      <Formik
        initialValues={{ 
          email: '',
          password: '',
          name: ''
        }}
        validationSchema = { RegistrationSchema } 
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
            <h2 className="text-center mb-4">Register</h2>
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
              {errors.password && touched.password && errors.password}
            </div>
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                />
              {errors.name && touched.name && errors.name}
            </div>
            <div className="row justify-content-center my-3">
              <input type="submit" value="Register" className="btn btn-primary" />
            </div>
            <div className="row justify-content-center mt-4">
              {this.props.registerError.hasError && <p>{this.props.registerError.message}</p>}
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
    registerError: state.error.registerError
  };
};

const mapDispatchToProps = {
  register
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Register)
);
