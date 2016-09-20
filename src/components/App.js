import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { API_KEY } from '../config'
import Plot from './Plot';
import {
          changeLocation,
          setSelectedDate,
          setSelectedTemp,
          setSelectedIcon,
          fetchData
                            } from '../actions/actions';

class App extends React.Component {
  fetchData = (evt) => {
    evt.preventDefault();

    var location = encodeURIComponent(this.props.location);

    var url = `http://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=${API_KEY}&units=metric`

    this.props.dispatch(fetchData(url));
  };

  onPlotClick = (data) => {
    if (data.points) {
      var number = data.points[0].pointNumber;
      this.props.dispatch(setSelectedDate(this.props.dates[number]));
      this.props.dispatch(setSelectedTemp(this.props.temps[number]));
      this.props.dispatch(setSelectedIcon(this.props.icons[number]));
    };
  };

  changeLocation = (evt) => {
    this.props.dispatch(changeLocation(evt.target.value));
  };

  render() {
    var currentTemp = 'not loaded yet';
    var weatherIcon;
    if (this.props.data.list) {
      currentTemp = this.props.data.list[0].main.temp;
      weatherIcon = this.props.data.list[0].weather[0].icon
    }
    var weatherIconUrl = `http://openweathermap.org/img/w/${weatherIcon}.png`
    var selectedWeatherIconUrl = `http://openweathermap.org/img/w/${this.props.selected.icon}.png`
    return (
      <div>
        <h1>Weather</h1>
        <form onSubmit={this.fetchData}>
          <label>City, Country
            <input
              placeholder={"City, Country"}
              type="text"
              value={this.props.location}
              onChange={this.changeLocation}
            />
          </label>
        </form>
        {(this.props.data.list) ? (
          <div>
            <div className='weather-container'>
              <div className='weather-details'>
                <p>{ currentTemp }°C!</p>
                <img src={weatherIconUrl} alt="weather"/>
              </div>
              <div >
                {(this.props.selected.temp) ? (
                <div className='weather-details'>
                  <p>The temperature on { this.props.selected.date } will be { this.props.selected.temp }°C</p>
                  <img src={selectedWeatherIconUrl} alt="weather"/>
                </div>
                ) : null }
              </div>
            </div>
            <h2>Forecast</h2>
            <div className='plot'>
              <Plot
                xData={this.props.dates}
                yData={this.props.temps}
                onPlotClick={this.onPlotClick}
                type="scatter"
              />
            </div>
          </div>
        ) : null}

      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);