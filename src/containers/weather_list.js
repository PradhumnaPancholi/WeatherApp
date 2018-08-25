import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesBars } from 'react-sparklines';

class WeatherList extends Component{

  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);

    return (
      <tr key={name}>
        <td>{name}</td>
        <Sparklines data={temps}>
          <SparklinesBars />
        </Sparklines>
      </tr>
    );
  }
  render() {
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}) { //(state)
  return { weather };// {weather: state.weather}
}

export default connect(mapStateToProps)(WeatherList);
