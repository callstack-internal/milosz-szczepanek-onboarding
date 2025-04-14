import {Button, SafeAreaView} from 'react-native';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

import {useThemedStyles} from '@hooks';
import {createThemedStyles} from '@utils';
import {i18n} from '@configs';
import {createWorkletRuntime, runOnRuntime} from 'react-native-reanimated';

const workletRuntime = createWorkletRuntime('background');

export const WeatherScreen = () => {
  const styles = useThemedStyles(themedStyles);

  const calculatePrimes = (limit: number): number[] => {
    'worklet';
    const primes: number[] = [];
    for (let i = 2; primes.length < limit; i++) {
      let isPrime = true;
      for (let j = 2; j * j <= i; j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primes.push(i);
      }
    }
    return primes;
  };

  const runOnSeparateThread = () => {
    runOnRuntime(workletRuntime, () => {
      'worklet';
      console.log('Starting heavy calculation...');
      const result = calculatePrimes(2400000); // Hardcore calculations so the thread is visible
      console.log('Prime calculation completed. Total primes:', result.length);
    })();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Run on separate thread" onPress={runOnSeparateThread} />
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
  title: i18n.t('weatherScreen:weather'),
};
