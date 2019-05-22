import React, { Component } from 'react';
import './index.css';
import WeatherTitle from '../../components/weatherTitle';
import WeatherForm from '../../components/weatherForm';
import WeatherInfo from '../../components/weatherInfo';
import API_KEY from '../../config.js';


class Weather extends Component {
  constructor() {
    super();
    this.state = {
      'data': [],
      'API_KEY': ''
    }
  }

  componentsWillMount() {
    this.setState({ API_KEY });
  }

  getWeather = async(e) => {
    e.preventDefault();

    let city = e.target.elements.city.value;
    let country = e.target.elements.country.value;

    // console.log(city, country);

    if (country === '' || country === null) {
      country = 'US';
    }

    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=imperial`;

    let response = await fetch(URL);

    let data = await response.json();

    this.setState({ data });
  }


  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <WeatherTitle />
        </div>
        <div className="col-md-8">
          <WeatherForm getWeather={this.getWeather} />
          <WeatherInfo data={this.state.data} />
        </div> {/* ends col md 8 */}
      </div> //ends row
    );
  }
}

export default Weather;
