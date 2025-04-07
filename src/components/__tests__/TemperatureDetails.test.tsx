import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {TemperatureDetails} from '../TemperatureDetails';

describe('component: TemperatureDetails', () => {
  it('renders the temperature correctly', () => {
    const temperature = 72;
    render(<TemperatureDetails temperature={temperature} />);

    expect(screen.getByText(`${temperature} °F`)).toBeTruthy();
  });
});
