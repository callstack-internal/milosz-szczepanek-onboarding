import {useEffect, useState} from 'react';
import {WeatherDataType} from '@types';

export const useSearchWeatherData = (weatherData?: WeatherDataType[]) => {
  const [searchText, setSearchText] = useState('');
  const [filteredWeatherData, setFilteredWeatherData] = useState<
    WeatherDataType[] | undefined
  >(undefined);

  useEffect(() => {
    const filteredData = weatherData?.filter(weatherItem => {
      const city = weatherItem.name.toLowerCase();

      return city.includes(searchText.toLowerCase());
    });

    setFilteredWeatherData(filteredData);
  }, [searchText, weatherData]);

  return {
    setSearchText,
    searchText,
    filteredWeatherData,
  };
};
