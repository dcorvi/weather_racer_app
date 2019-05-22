import React, { Component } from 'react';
import './index.css';

class RacerForm extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <form onSubmit={this.props.getStandings} className="RacerForm">
            <input type="text" name="season" placeholder="Season..." />
            <input type="text" name="round" placeholder="Round..." />
            <input type="submit" value="Get Standings" />
          </form>
        </div>
      </div>
    );
  }
}

export default RacerForm;
