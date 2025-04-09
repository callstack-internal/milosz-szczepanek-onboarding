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
