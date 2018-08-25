import axios from 'axios';
const API_KEY = '01fe6a67a61645674d96c91c30028271';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeatherData(city) {
  const url = `${ROOT_URL}&q=${city}`;
  const request = axios.get(url);

  return{
    type: FETCH_WEATHER,
    payload: request
  };
}
