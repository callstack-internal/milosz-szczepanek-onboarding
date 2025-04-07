import {useTheme} from './useTheme';
import {StyleSheet} from 'react-native';
import {useMemo} from 'react';

export const useThemedStyles = <T extends StyleSheet.NamedStyles<any>>(
  styles: (theme: any) => T,
) => {
  const theme = useTheme();
  const themedStyles = useMemo(() => styles(theme), [theme]);

  return StyleSheet.create(themedStyles);
};
