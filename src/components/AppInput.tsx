import React from 'react';
import {TextInput, TextInputProps} from 'react-native';
import {createThemedStyles} from '@utils';
import {useTheme, useThemedStyles} from '@hooks';

export const AppInput: React.FC<TextInputProps> = props => {
  const {colors} = useTheme();
  const styles = useThemedStyles(themedStyles);

  return (
    <TextInput
      {...props}
      style={styles.textInput}
      placeholderTextColor={colors.grey}
    />
  );
};

const themedStyles = createThemedStyles(theme => ({
  textInput: {
    marginVertical: theme.sizes['2x'],
    marginHorizontal: theme.sizes['4x'],
    padding: theme.sizes['2x'],
    backgroundColor: theme.colors.accent,
    borderRadius: 16,
    color: theme.colors.white,
  },
}));
