import axios from 'axios';
import {constants} from '@configs';

const axiosWeatherInstance = axios.create({
  baseURL: 'https://api.openweathermap.org',
});

axiosWeatherInstance.interceptors.request.use(
  config => {
    if (!config.params) {
      config.params = {};
    }
    config.params.appid = constants.WEATHER_API_KEY;
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export {axiosWeatherInstance};
