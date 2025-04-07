// __tests__/WeatherScreen.test.tsx
import React from 'react';
import {render} from '@testing-library/react-native';
import {WeatherScreen} from '@screens';

describe('screens: WeatherScreen', () => {
  it('renders the welcome message', () => {
    const {getByText} = render(<WeatherScreen />);

    expect(getByText('Welcome Weather')).toBeTruthy();
  });
});
