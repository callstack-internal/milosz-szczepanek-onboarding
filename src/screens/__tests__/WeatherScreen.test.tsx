import {setupServer} from 'msw/node';
import {http, HttpResponse} from 'msw';
import {render, screen, waitFor} from '@testing-library/react-native';
import {WeatherScreen} from '@screens';
import {AppProviders} from '@components';
import {weatherMockData} from '@mocks';

jest.mock('@hooks', () => ({
  ...jest.requireActual('@hooks'),
  useGetCurrentLocationWeatherData: jest.fn(() => ({
    data: null,
  })),
}));

const server = setupServer(
  http.get('https://api.openweathermap.org/data/2.5/group', () => {
    return HttpResponse.json(weatherMockData);
  }),
  http.get('https://api.openweathermap.org/data/2.5/weather', () => {
    return HttpResponse.json(weatherMockData.list[1]);
  }),
);

describe('screen: WeatherScreen', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('should display weather data from the API', async () => {
    render(
      <AppProviders>
        <WeatherScreen />
      </AppProviders>,
    );

    await waitFor(() => {
      expect(screen.getByText('Kyiv')).toBeTruthy();
    });
  });

  it('should display error message when API fails and current user location should not be visible', async () => {
    server.use(
      http.get('https://api.openweathermap.org/data/2.5/group', () => {
        return HttpResponse.json({status: 500});
      }),
      http.get('https://api.openweathermap.org/data/2.5/weather', () => {
        return HttpResponse.json({status: 500});
      }),
    );

    render(
      <AppProviders>
        <WeatherScreen />
      </AppProviders>,
    );

    await waitFor(() => {
      expect(
        screen.getByText(
          'Unfortunately service is currently not available. Please pull to refresh',
        ),
      ).toBeTruthy();
    });
    expect(
      screen.queryByTestId('user-location-weather-details'),
    ).not.toBeVisible();
  });
});
