import {useColorScheme} from 'react-native';
import {darkTheme, lightTheme} from '@configs';

export const useTheme = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  return theme;
};
