import React, { Component } from 'react';
import './index.css';
import RacerForm from '../../components/racerForm';
import RacerTable from '../../components/racerTable';
import RacerInfo from '../../components/racerInfo';


class Racer extends Component {
  constructor() {
    super();
    this.state = {
      'data': []
    }
  }


    getRacer = async(e) => {
      e.preventDefault();

      let series = e.target.elements.series.value;
      let season = e.target.elements.season.value;

      console.log(series, season);

      // if (country === '' || country === null) {
      //   country = 'US';
      // }

      const URL = `https://ergast.com/api/f1/${season}/${series}/driverStandings.json`;

      // console.log(const);
      let response = await fetch(URL);
      //
      let data = await response.json();
      // //
      console.log(data);
      this.setState({ data });
    }

  render() {
    return (

      <div className="row">
        <div className="col-md-12">
          <div className="container">
            <h1>Racer</h1>
          </div>
          <RacerForm getRacer={this.getRacer} />
          <RacerTable />
          <RacerInfo data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default Racer;
