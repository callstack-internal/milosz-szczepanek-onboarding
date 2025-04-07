import {WeatherDataType} from '../services';

export type MainStackParams = {
  WeatherScreen: undefined;
  WeatherDetailsScreen: {
    item: WeatherDataType;
  };
};
