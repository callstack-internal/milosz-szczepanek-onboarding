import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  WeatherDetailsScreen,
  weatherDetailsScreenOptions,
  WeatherScreen,
  weatherScreenOptions,
} from '@screens';
import {MainStackParams} from '@types';
import {createThemedStyles} from '@utils';
import {useThemedStyles} from '@hooks';

const Stack = createNativeStackNavigator<MainStackParams>();

export const MainNavigator = () => {
  const styles = useThemedStyles(themedStyles);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle,
      }}>
      <Stack.Screen
        name="WeatherScreen"
        component={WeatherScreen}
        options={weatherScreenOptions}
      />
      <Stack.Screen
        name="WeatherDetailsScreen"
        component={WeatherDetailsScreen}
        options={weatherDetailsScreenOptions}
      />
    </Stack.Navigator>
  );
};

const themedStyles = createThemedStyles(theme => ({
  headerStyle: {
    backgroundColor: theme.colors.primary,
  },
  headerTitleStyle: {
    color: theme.colors.text,
  },
}));
