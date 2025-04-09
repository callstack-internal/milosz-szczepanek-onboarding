import {useQuery} from '@tanstack/react-query';
import {WeatherService} from '@services';
import {useEffect} from 'react';
import Toast from 'react-native-toast-message';
import {useTranslation} from 'react-i18next';

export const useGetWeatherData = () => {
  const {t} = useTranslation();
  const {data, isError, ...queryOptions} = useQuery({
    queryKey: ['weatherData'],
    queryFn: WeatherService.getWeatherData,
  });

  useEffect(() => {
    if (isError) {
      Toast.show({
        type: 'error',
        text1: t('general:somethingWentWrong'),
        text2: t('general:pleasePullToRefresh'),
      });
    }
  }, [isError]);

  return {
    data: data?.list,
    ...queryOptions,
  };
};
