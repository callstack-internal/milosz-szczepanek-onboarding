import React from 'react';
import {View} from 'react-native';
import {BaseWeatherItem, DataNotAvailable, WeatherDetails} from '@components';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {useMainStackRoute, useThemedStyles} from '@hooks';
import {createThemedStyles} from '@utils';
import {useTranslation} from 'react-i18next';
import {i18n} from '@configs';

export const WeatherDetailsScreen = () => {
  const {t} = useTranslation();
  const styles = useThemedStyles(themedStyles);
  const {params} = useMainStackRoute();

  if (!params?.item) {
    return <DataNotAvailable />;
  }

  return (
    <View style={styles.container}>
      <BaseWeatherItem
        city={params.item.name}
        imageCode={params.item.weather[0].icon}
        temperature={params.item.main.temp}
        condition={params.item.weather[0].description}
        displayNavigationArrow={false}
      />
      <WeatherDetails
        title={t('weatherDetailsScreen:humidity')}
        value={`${params.item.main.humidity} %`}
      />
      <WeatherDetails
        title={t('weatherDetailsScreen:pressure')}
        value={`${params.item.main.pressure} hPa`}
      />
      <WeatherDetails
        title={t('weatherDetailsScreen:windSpeed')}
        value={`${params.item.wind.speed} mph`}
      />
      <WeatherDetails
        title={t('weatherDetailsScreen:cloudCover')}
        value={`${params.item.clouds.all} %`}
      />
    </View>
  );
};

const themedStyles = createThemedStyles(theme => ({
  container: {
    backgroundColor: theme.colors.primary,
    flex: 1,
  },
}));

export const weatherDetailsScreenOptions: NativeStackNavigationOptions = {
  title: i18n.t('weatherDetailsScreen:details'),
};
