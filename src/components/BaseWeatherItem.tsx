import React from 'react';
import {AppText} from './AppText.tsx';
import {View} from 'react-native';
import {WeatherImage} from './WeatherImage.tsx';
import {RightArrow} from './RightArrow.tsx';
import {capitalizeFirstLetters, createThemedStyles} from '@utils';
import {useTheme, useThemedStyles} from '@hooks';
import {TemperatureDetails} from './TemperatureDetails.tsx';

type PropsType = {
  city: string;
  condition: string;
  imageCode: string;
  temperature: number;
  displayNavigationArrow?: boolean;
};

export const BaseWeatherItem: React.FC<PropsType> = ({
  city,
  condition,
  imageCode,
  temperature,
  displayNavigationArrow = true,
}) => {
  const {colors} = useTheme();
  const styles = useThemedStyles(themedStyles);

  return (
    <View style={styles.container}>
      <View style={styles.generalDetails}>
        <WeatherImage imageCode={imageCode} />
        <View>
          <AppText font="bodyBold">{city}</AppText>
          <AppText font="caption" color={colors.grey}>
            {capitalizeFirstLetters(condition)}
          </AppText>
        </View>
      </View>

      <View style={styles.temperatureDetails}>
        <TemperatureDetails temperature={temperature} />
        {displayNavigationArrow ? (
          <RightArrow testID="base-weather-item" />
        ) : null}
      </View>
    </View>
  );
};

const themedStyles = createThemedStyles(theme => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: theme.sizes['4x'],
    paddingVertical: theme.sizes['2x'],
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.accent,
  },
  generalDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.sizes['2x'],
  },
  temperatureDetails: {
    flexDirection: 'row',
    gap: theme.sizes['2x'],
  },
}));
