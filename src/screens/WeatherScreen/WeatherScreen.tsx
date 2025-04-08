import {
  FlatList,
  ListRenderItem,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {useGetWeatherData} from './WeatherScreen.helpers.ts';
import {
  AppActivityIndicator,
  BaseWeatherItem,
  DataNotAvailable,
} from '@components';
import {WeatherDataType} from '@types';
import {useMainNavigation, useThemedStyles} from '@hooks';
import {createThemedStyles} from '@utils';

export const WeatherScreen = () => {
  const styles = useThemedStyles(themedStyles);
  const navigation = useMainNavigation();
  const {data, isLoading, refetch, isRefetching} = useGetWeatherData();

  if (isLoading) {
    return <AppActivityIndicator />;
  }

  const renderItem: ListRenderItem<WeatherDataType> = ({item}) => {
    return (
      <TouchableOpacity
        testID={`weather-item-${item.name}`}
        onPress={() => navigation.navigate('WeatherDetailsScreen', {item})}>
        <BaseWeatherItem
          city={item.name}
          imageCode={item.weather[0].icon}
          temperature={item.main.temp}
          condition={item.weather[0].description}
        />
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={renderItem}
      ListEmptyComponent={
        <DataNotAvailable message="Unfortunately service is currently not available. Please pull to refresh" />
      }
      refreshControl={
        <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
      }
    />
  );
};

const themedStyles = createThemedStyles(theme => ({
  container: {
    backgroundColor: theme.colors.primary,
  },
}));

export const weatherScreenOptions: NativeStackNavigationOptions = {
  title: 'Weather',
};
