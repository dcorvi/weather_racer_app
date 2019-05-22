import React, { Component } from 'react';
import './index.css';
import RacerForm from '../../components/racerForm';
import RacerTable from '../../components/racerTable';

class Racer extends Component {
  constructor() {
    super();
    this.state = {
      'standings': []
    }
  }

  getStandings = async(e) => {
    e.preventDefault();

    let round = e.target.elements.round.value;
    let season = e.target.elements.season.value;

    const URL = `http://ergast.com/api/f1/${season}/${round}/driverStandings.json`;

    let response = await fetch(URL);

    let data = await response.json();

    this.setState({
      'standings': data.MRData.StandingsTable.StandingsLists[0].DriverStandings
    });
  }

  render() {
    console.log(this.state.standings);
    return (
      <div className="row">
        <div className="col-md-12">
          <RacerForm getStandings={this.getStandings} />
          <RacerTable standings={this.state.standings} />
        </div>
      </div>
    );
  }
}

export default Racer;
