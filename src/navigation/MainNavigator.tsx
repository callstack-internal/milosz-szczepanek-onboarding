import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WeatherScreen, weatherScreenOptions} from '@screens';
import {MainStackParams} from '@types';

const Stack = createNativeStackNavigator<MainStackParams>();

export const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WeatherScreen"
        component={WeatherScreen}
        options={weatherScreenOptions}
      />
    </Stack.Navigator>
  );
};
