import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class NotFound extends Component {

  render() {
    return (
      <div>
        <h1 className="text-center mt-4 display-3">Oops! Not found!</h1>
      </div>
    );
  }
}

export default withRouter(NotFound);