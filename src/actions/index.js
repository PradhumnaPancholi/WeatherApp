import axios from 'axios';
const API_KEY = 'd854189979ad62c7c0d4ca4c5e8cfc74';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeatherData(city) {
  const url = `${ROOT_URL}&q=${city}`;
  const request = axios.get(url);

  console.log('Request recieved: ', request);
  return{
    type: FETCH_WEATHER,
    payload: request
  };
}
