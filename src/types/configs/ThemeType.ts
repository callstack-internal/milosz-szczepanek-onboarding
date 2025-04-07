import {FontsType} from './FontsType.ts';
import {SizesType} from './SizesType.ts';

export interface ThemeType {
  colors: {
    primary: string;
    accent: string;
    text: string;
    accentText: string;
    grey: string;
    white: string;
  };
  sizes: SizesType;
  fonts: FontsType;
}
