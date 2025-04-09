import {constants, axiosWeatherInstance} from '@configs';
import {WeatherDataResponseType, WeatherDataType} from '@types';

export class WeatherService {
  static async getWeatherData(): Promise<WeatherDataResponseType> {
    return axiosWeatherInstance.get('/data/2.5/group', {
      params: {
        id: constants.weatherAppCityIds.toString(),
      },
    });
  }

  static async getCurrentLocationWeatherData(
    lat: number,
    lon: number,
  ): Promise<WeatherDataType> {
    return axiosWeatherInstance.get('/data/2.5/weather', {
      params: {
        lat,
        lon,
      },
    });
  }
}
