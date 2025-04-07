import React from 'react';
import {Text, TextProps} from 'react-native';
import {FontsType} from '@types';
import {useTheme} from '@hooks';

interface PropsType extends TextProps {
  children: string;
  font: keyof FontsType;
  color?: string;
}

export const AppText: React.FC<PropsType> = ({
  children,
  font,
  color,
  ...props
}) => {
  const {fonts, colors} = useTheme();
  const baseFontStyles = fonts[font];

  return (
    <Text
      {...props}
      style={[baseFontStyles, {color: color ?? colors.text}, props.style]}>
      {children}
    </Text>
  );
};
