import {createThemedStyles} from '../createThemedStyles';
import {ThemeType} from '@types';
import {lightTheme} from '@configs';

describe('utils: createThemedStyles', () => {
  it('should create styles based on the theme', () => {
    const stylesCallback = (theme: ThemeType) => ({
      container: {
        backgroundColor: theme.colors.primary,
      },
      text: {
        color: theme.colors.text,
      },
    });

    const themedStyles = createThemedStyles(stylesCallback)(lightTheme);
    const expectedStyles = {
      container: {
        backgroundColor: lightTheme.colors.primary,
      },
      text: {
        color: lightTheme.colors.text,
      },
    };

    expect(themedStyles).toEqual(expectedStyles);
  });

  it('should return a function that creates styles', () => {
    const stylesCallback = jest.fn((theme: ThemeType) => ({
      container: {
        backgroundColor: theme.colors.primary,
      },
    }));

    const themedStylesFunction = createThemedStyles(stylesCallback);
    expect(typeof themedStylesFunction).toBe('function');

    const themedStyles = themedStylesFunction(lightTheme);
    expect(stylesCallback).toHaveBeenCalledWith(lightTheme);
    expect(themedStyles).toEqual({
      container: {
        backgroundColor: lightTheme.colors.primary,
      },
    });
  });
});
