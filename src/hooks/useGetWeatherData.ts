import {useQuery} from '@tanstack/react-query';
import {WeatherService} from '@services';
import {useEffect} from 'react';
import Toast from 'react-native-toast-message';

export const useGetWeatherData = () => {
  const {
    data: responseData,
    isError,
    ...queryOptions
  } = useQuery({
    queryKey: ['weatherData'],
    queryFn: WeatherService.getWeatherData,
  });

  useEffect(() => {
    if (isError) {
      Toast.show({
        type: 'error',
        text1: 'Something went wrong',
        text2: 'Please pull to refresh',
      });
    }
  }, [isError]);

  return {
    data: responseData?.data?.list,
    ...queryOptions,
  };
};
