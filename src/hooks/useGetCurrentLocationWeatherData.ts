import {useQuery} from '@tanstack/react-query';
import {WeatherService} from '@services';
import NativeLocationService from '../../specs/NativeLocationService.ts';
import {NativeCurrentLocationType, WeatherDataType} from '@types';

export const useGetCurrentLocationWeatherData = () => {
  const currentLocationQuery = useQuery<NativeCurrentLocationType>({
    queryKey: ['currentLocation'],
    queryFn: async () => {
      const currentLocation =
        await NativeLocationService.getCurrentLocationDetails();

      return JSON.parse(currentLocation);
    },
  });

  const currentLocationWeatherDataQuery = useQuery<WeatherDataType | null>({
    queryKey: ['currentLocationWeatherData'],
    queryFn: async () => {
      if (!currentLocationQuery.data) {
        return null;
      }

      return await WeatherService.getCurrentLocationWeatherData(
        currentLocationQuery.data.latitude,
        currentLocationQuery.data.longitude,
      );
    },
    enabled: !!currentLocationQuery.data,
  });

  return {
    data: currentLocationWeatherDataQuery.data,
  };
};
