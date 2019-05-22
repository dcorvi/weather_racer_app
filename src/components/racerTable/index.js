import React, { Component } from 'react';
import './index.css';

class RacerTable extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th>Position</th>
                <th>Name</th>
                <th>Nationality</th>
                <th>Sponsor</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.standings[0] &&
                  this.props.standings.map( driver =>
                    <tr key={driver.position}>
                      <td>{driver.position}</td>
                      <td>
                        <a href={driver.Driver.url} target="_blank">
                        {driver.Driver.givenName + ' ' + driver.Driver.familyName}</a>
                      </td>
                      <td>{driver.Driver.nationality}</td>
                      <td>{driver.Constructors[0].name}</td>
                      <td>{driver.points}</td>
                    </tr>
                  )
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default RacerTable;
