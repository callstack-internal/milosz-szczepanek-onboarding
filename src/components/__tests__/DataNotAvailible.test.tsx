import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {DataNotAvailable} from '../DataNotAvailible';

describe('component: DataNotAvailable', () => {
  it('renders the default message when no message is provided', () => {
    render(<DataNotAvailable />);

    expect(
      screen.getByText(
        'Unfortunately service is currently unavailable. Please try again later',
      ),
    ).toBeTruthy();
  });

  it('renders a custom message when provided', () => {
    const customMessage = 'Custom error message';
    render(<DataNotAvailable message={customMessage} />);

    expect(screen.getByText(customMessage)).toBeTruthy();
  });
});
