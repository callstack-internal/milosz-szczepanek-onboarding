import {StyleSheet, ViewStyle, TextStyle, ImageStyle} from 'react-native';
import {ThemeType} from '@types';

type NamedStyles<T> = {[P in keyof T]: ViewStyle | TextStyle | ImageStyle};

export const createThemedStyles =
  <T extends NamedStyles<T>>(stylesCallback: (theme: ThemeType) => T) =>
  (theme: ThemeType) =>
    stylesCallback(theme);
