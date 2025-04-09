import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {BaseWeatherItem} from '../BaseWeatherItem';

describe('component: BaseWeatherItem', () => {
  const baseProps = {
    city: 'New York',
    condition: 'partly cloudy',
    imageCode: '01d',
    temperature: 25,
  };

  it('renders city, condition and temperature correctly', () => {
    render(<BaseWeatherItem {...baseProps} />);

    expect(screen.getByText('New York')).toBeTruthy();
    expect(screen.getByText('Partly Cloudy')).toBeTruthy();
    expect(screen.getByText('25 °F')).toBeTruthy();
  });

  it('renders navigation arrow by default', () => {
    render(<BaseWeatherItem {...baseProps} />);

    expect(screen.getByTestId('base-weather-item')).toBeTruthy();
  });

  it('does not render navigation arrow when displayNavigationArrow is false', () => {
    render(<BaseWeatherItem {...baseProps} displayNavigationArrow={false} />);

    expect(screen.queryByTestId('base-weather-item')).toBeNull();
  });
});
