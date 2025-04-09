import {renderHook, act} from '@testing-library/react-hooks';
import {useSearchWeatherData} from '../useSearchWeatherData';
import {weatherMockData} from '@mocks';

describe('hooks: useSearchWeatherData', () => {
  const weatherData = weatherMockData.list;

  it('should filter weather data by city name', () => {
    const {result} = renderHook(() => useSearchWeatherData(weatherData));

    act(() => {
      result.current.setSearchText('Kyiv');
    });

    expect(result.current.filteredWeatherData).toHaveLength(1);
    expect(result.current.filteredWeatherData?.[0].name).toBe('Kyiv');
  });

  it('should return multiple results for partial matches', () => {
    const {result} = renderHook(() => useSearchWeatherData(weatherData));

    act(() => {
      result.current.setSearchText('wa');
    });

    expect(result.current.filteredWeatherData).toHaveLength(2);
    const cityNames = result.current.filteredWeatherData?.map(
      item => item.name,
    );
    expect(cityNames).toContain('Warsaw');
    expect(cityNames).toContain('Washington');
  });

  it('should return an empty array for no matches', () => {
    const {result} = renderHook(() => useSearchWeatherData(weatherData));

    act(() => {
      result.current.setSearchText('NonExistentCity');
    });

    expect(result.current.filteredWeatherData).toEqual([]);
  });
});
