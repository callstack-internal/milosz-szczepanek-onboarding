import {axiosWeatherInstance} from '@utils';
import {constants} from '@configs';
import {WeatherDataResponseType} from '@types';

export class WeatherService {
  static async getWeatherData(): Promise<WeatherDataResponseType> {
    return axiosWeatherInstance.get('/data/2.5/group', {
      params: {
        id: constants.weatherAppCityIds.toString(),
      },
    });
  }
}
