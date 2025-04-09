import {
  FlatList,
  ListRenderItem,
  RefreshControl,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {
  AppActivityIndicator,
  AppInput,
  BaseWeatherItem,
  DataNotAvailable,
} from '@components';
import {WeatherDataType} from '@types';
import {
  useGetWeatherData,
  useMainNavigation,
  useSearchWeatherData,
  useThemedStyles,
} from '@hooks';
import {createThemedStyles} from '@utils';
import {KeyboardAwareScrollView} from 'react-native-keyboard-controller';
import {UserLocationWeatherDetails} from '../../components/UserLocationWeatherDetails.tsx';

export const WeatherScreen = () => {
  const styles = useThemedStyles(themedStyles);
  const navigation = useMainNavigation();
  const {data, isLoading, refetch, isRefetching, isLoadingError} =
    useGetWeatherData();
  const {searchText, setSearchText, filteredWeatherData} =
    useSearchWeatherData(data);

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

  const renderListEmptyComponent = () => {
    if (filteredWeatherData && !isLoadingError) {
      return <DataNotAvailable message="No results found" />;
    }

    return (
      <DataNotAvailable message="Unfortunately service is currently not available. Please pull to refresh" />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppInput
        placeholder="Search city..."
        value={searchText}
        onChangeText={setSearchText}
      />

      <FlatList
        data={filteredWeatherData || data}
        renderItem={renderItem}
        ListHeaderComponent={UserLocationWeatherDetails}
        ListEmptyComponent={renderListEmptyComponent}
        refreshControl={
          <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
        }
        renderScrollComponent={props => <KeyboardAwareScrollView {...props} />}
      />
    </SafeAreaView>
  );
};

const themedStyles = createThemedStyles(theme => ({
  container: {
    backgroundColor: theme.colors.primary,
    flex: 1,
  },
}));

export const weatherScreenOptions: NativeStackNavigationOptions = {
  title: 'Weather',
};
