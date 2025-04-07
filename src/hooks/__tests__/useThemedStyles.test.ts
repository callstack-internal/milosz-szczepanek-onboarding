import {renderHook} from '@testing-library/react-hooks';
import {StyleSheet} from 'react-native';
import {useThemedStyles} from '../useThemedStyles';
import {useTheme} from '../useTheme';
import {lightTheme} from '@configs';
import {ThemeType} from '@types';

jest.mock('../useTheme');

describe('hooks: useThemedStyles', () => {
  beforeEach(() => {
    (useTheme as jest.Mock).mockReturnValue(lightTheme);
  });

  it('should create styles based on the theme', () => {
    const stylesCallback = (theme: ThemeType) => ({
      container: {
        backgroundColor: theme.colors.primary,
      },
      text: {
        color: theme.colors.text,
      },
    });

    const {result} = renderHook(() => useThemedStyles(stylesCallback));

    const expectedStyles = StyleSheet.create({
      container: {
        backgroundColor: lightTheme.colors.primary,
      },
      text: {
        color: lightTheme.colors.text,
      },
    });

    expect(result.current).toEqual(expectedStyles);
  });

  it('should memoize the styles', () => {
    const stylesCallback = jest.fn((theme: any) => ({
      container: {
        backgroundColor: theme.colors.primary,
      },
    }));

    const {result, rerender} = renderHook(() =>
      useThemedStyles(stylesCallback),
    );

    const firstRenderStyles = result.current;

    rerender();

    const secondRenderStyles = result.current;

    expect(firstRenderStyles).toBe(secondRenderStyles);
    expect(stylesCallback).toHaveBeenCalledTimes(1);
  });
});
