import {renderHook} from '@testing-library/react-hooks';
import {useColorScheme} from 'react-native';
import {useTheme} from '../useTheme';
import {darkTheme, lightTheme} from '@configs';

jest.mock('react-native', () => ({
  useColorScheme: jest.fn(),
}));

describe('hooks: useTheme', () => {
  it('should return darkTheme when color scheme is dark', () => {
    (useColorScheme as jest.Mock).mockReturnValue('dark');

    const {result} = renderHook(() => useTheme());

    expect(result.current).toBe(darkTheme);
  });

  it('should return lightTheme when color scheme is light', () => {
    (useColorScheme as jest.Mock).mockReturnValue('light');

    const {result} = renderHook(() => useTheme());

    expect(result.current).toBe(lightTheme);
  });

  it('should return lightTheme when color scheme is undefined', () => {
    (useColorScheme as jest.Mock).mockReturnValue(undefined);

    const {result} = renderHook(() => useTheme());

    expect(result.current).toBe(lightTheme);
  });
});
