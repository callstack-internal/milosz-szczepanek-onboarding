import React from 'react';
import {BaseWeatherItem} from './BaseWeatherItem.tsx';
import {AppText} from './AppText.tsx';
import {createThemedStyles} from '@utils';
import {useGetCurrentLocationWeatherData, useThemedStyles} from '@hooks';
import Animated, {FadeInUp} from 'react-native-reanimated';

export const UserLocationWeatherDetails = () => {
  const {data} = useGetCurrentLocationWeatherData();
  const styles = useThemedStyles(themedStyles);

  return data ? (
    <Animated.View
      entering={FadeInUp.duration(600)}
      testID="user-location-weather-details">
      <AppText font="bodyBold" style={styles.text}>
        Current Location
      </AppText>
      <BaseWeatherItem
        city={data.name}
        imageCode={data.weather[0].icon}
        temperature={data.main.temp}
        condition={data.weather[0].description}
      />
    </Animated.View>
  ) : null;
};

const themedStyles = createThemedStyles(theme => ({
  text: {
    paddingHorizontal: theme.sizes['4x'],
  },
}));
