import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {AppText} from '../AppText';
import {fonts, lightTheme} from '@configs';

describe('component: AppText', () => {
  it('renders correctly with default color', () => {
    render(<AppText font="body">Hello World</AppText>);

    const textElement = screen.getByText('Hello World');
    expect(textElement).toBeTruthy();
    expect(textElement.props.style).toContainEqual({
      fontSize: fonts.body.fontSize,
    });
    expect(textElement.props.style).toContainEqual({
      color: lightTheme.colors.text,
    });
  });

  it('renders correctly with custom color', () => {
    const customColor = '#ff0000';

    render(
      <AppText font="caption" color={customColor}>
        Custom Color
      </AppText>,
    );

    const textElement = screen.getByText('Custom Color');
    expect(textElement).toBeTruthy();
    expect(textElement.props.style).toContainEqual({
      fontSize: fonts.caption.fontSize,
    });
    expect(textElement.props.style).toContainEqual({color: customColor});
  });

  it('applies additional styles from props', () => {
    render(
      <AppText font="body" style={{margin: 10}}>
        Styled Text
      </AppText>,
    );

    const textElement = screen.getByText('Styled Text');
    expect(textElement.props.style).toContainEqual({margin: 10});
  });
});
