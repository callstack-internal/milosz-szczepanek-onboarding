import {setupServer} from 'msw/node';
import {http, HttpResponse} from 'msw';
import {weatherMockData} from './weatherMockData.ts';
import {render, screen, waitFor} from '@testing-library/react-native';
import {WeatherScreen} from '@screens';
import {AppProviders} from '@components';

const server = setupServer(
  http.get('https://api.openweathermap.org/data/2.5/*', () => {
    return HttpResponse.json(weatherMockData);
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

  it('should display error message when API fails', async () => {
    server.use(
      http.get('https://api.openweathermap.org/data/2.5/*', () => {
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
  });
});
