import React, { Component } from 'react';
import './index.css';

class RacerForm extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="container">
            <form onSubmit={this.props.getRacer} className="RacerForm">
              <input type="text" name="series" placeholder="Series..." />
              <input type="text" name="season" placeholder="Season..." />
              <input type="submit" value="Get Standings" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default RacerForm;
