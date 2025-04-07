import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {WeatherDetails} from '../WeatherDetails';

describe('component: WeatherDetails', () => {
  it('renders the title and value correctly', () => {
    const title = 'Humidity';
    const value = '75%';
    render(<WeatherDetails title={title} value={value} />);

    expect(screen.getByText(title)).toBeTruthy();
    expect(screen.getByText(value)).toBeTruthy();
  });
});
