import React from 'react';
import {AppText} from './AppText.tsx';
import {View} from 'react-native';
import {useTheme, useThemedStyles} from '@hooks';
import {createThemedStyles} from '@utils';

type PropsType = {
  temperature: number;
};

export const TemperatureDetails: React.FC<PropsType> = ({temperature}) => {
  const {colors} = useTheme();
  const styles = useThemedStyles(themedStyles);

  return (
    <View style={styles.container}>
      <AppText
        font="bodyBold"
        color={colors.white}>{`${temperature} °F`}</AppText>
    </View>
  );
};

const themedStyles = createThemedStyles(theme => ({
  container: {
    backgroundColor: theme.colors.accent,
    padding: theme.sizes['2x'],
    borderRadius: 24,
  },
}));
