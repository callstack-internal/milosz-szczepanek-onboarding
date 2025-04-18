jest.mock('react-native-config', () => ({
  default: {
    OPEN_WEATHER_API_KEY: 'mock_api_key',
  },
}));
jest.mock('react-native-keyboard-controller', () =>
  require('react-native-keyboard-controller/jest'),
);
jest.mock('./specs/NativeLocationService', () => ({
  getCurrentLocationDetails: jest.fn(() =>
    Promise.resolve(
      JSON.stringify({
        altitude: 0,
        horizontalAccuracy: 5,
        verticalAccuracy: -1,
        timestamp: '2025-04-09 13:27:33 +0000',
        latitude: 37.785834,
        longitude: -122.406417,
      }),
    ),
  ),
}));

jest.mock('react-native-localize', () => ({
  getLocales: () => [
    {
      countryCode: 'US',
      languageTag: 'en-US',
      languageCode: 'en',
      isRTL: false,
    },
  ],
}));
