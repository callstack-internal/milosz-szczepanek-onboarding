import React from 'react';
import {BaseWeatherItem} from './BaseWeatherItem.tsx';
import {AppText} from './AppText.tsx';
import {createThemedStyles} from '@utils';
import {
  useGetCurrentLocationWeatherData,
  useMainNavigation,
  useThemedStyles,
} from '@hooks';
import Animated, {FadeInUp} from 'react-native-reanimated';
import {useTranslation} from 'react-i18next';
import {TouchableOpacity} from 'react-native';

export const UserLocationWeatherDetails = () => {
  const navigation = useMainNavigation();
  const {t} = useTranslation();
  const {data} = useGetCurrentLocationWeatherData();
  const styles = useThemedStyles(themedStyles);

  return data ? (
    <Animated.View
      entering={FadeInUp.duration(600)}
      testID="user-location-weather-details">
      <AppText font="bodyBold" style={styles.text}>
        {t('weatherScreen:currentLocation')}
      </AppText>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate('WeatherDetailsScreen', {item: data})
        }>
        <BaseWeatherItem
          city={data.name}
          imageCode={data.weather[0].icon}
          temperature={data.main.temp}
          condition={data.weather[0].description}
        />
      </TouchableOpacity>
    </Animated.View>
  ) : null;
};

const themedStyles = createThemedStyles(theme => ({
  text: {
    paddingHorizontal: theme.sizes['4x'],
  },
}));
