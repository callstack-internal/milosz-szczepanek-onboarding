import {Text, View} from 'react-native';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {createThemedStyles} from '@utils';
import {useThemedStyles} from '@hooks';

export const WeatherScreen = () => {
  const styles = useThemedStyles(themedStyles);

  return (
    <View style={styles.container}>
      <Text>Welcome Weather</Text>
    </View>
  );
};

export const weatherScreenOptions: NativeStackNavigationOptions = {
  title: 'Weather',
};

const themedStyles = createThemedStyles(theme => ({
  container: {
    backgroundColor: theme.colors.accent,
    flex: 1,
  },
}));
