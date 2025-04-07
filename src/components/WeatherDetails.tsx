import React from 'react';
import {AppText} from './AppText.tsx';
import {View} from 'react-native';
import {createThemedStyles} from '@utils';
import {useTheme, useThemedStyles} from '@hooks';

type PropsType = {
  title: string;
  value: string;
};

export const WeatherDetails: React.FC<PropsType> = ({title, value}) => {
  const {colors} = useTheme();
  const styles = useThemedStyles(themedStyles);

  return (
    <View style={styles.container}>
      <AppText font="bodyBold">{title}</AppText>
      <AppText font="body" color={colors.grey}>
        {value}
      </AppText>
    </View>
  );
};

const themedStyles = createThemedStyles(theme => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.accent,
    paddingHorizontal: theme.sizes['4x'],
    paddingVertical: theme.sizes['2x'],
  },
}));
