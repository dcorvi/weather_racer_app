import React, { Component } from 'react';
import './index.css';

class RacerInfo extends Component {
  render() {
    console.log(this.props.data);
    console.log(this.props.data.name);
    return (
      <div className="RacerInfo">
      </div> // ends row
    );
  }
}

export default RacerInfo;
