import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { authUser } from '../store/actions/AuthActions';
import NotFound from '../containers/NotFound';
import { AUTHORIZED_ROUTES, NON_AUTHORIZED_ROUTES } from '../util/routes'

class AppLayout extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.user !== prevProps.user) {
      if (this.props.user) {
        this.props.history.push('/home');
      } else {
        this.props.history.push('/login');
      }
    }
  }

  render() {
    
    const routes = this.props.user ? AUTHORIZED_ROUTES : NON_AUTHORIZED_ROUTES;
    
    return ( 
      <Switch>
          {routes.map(route => 
            <Route path={route.path} component={route.component} />
          )}
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
      </Switch>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.authUser
  };
};

const mapDispatchToProps = () => {
  return {
    authUser
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppLayout)
);
