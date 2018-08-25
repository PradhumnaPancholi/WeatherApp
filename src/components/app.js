import React, { Component } from 'react';
import WeatherList from '../containers/weather_list';

//components//
import SearchBar from '../containers/search_bar';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
