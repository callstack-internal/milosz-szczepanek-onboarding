import React from 'react';
import {Image} from 'react-native';
import {createThemedStyles} from '@utils';
import {useThemedStyles} from '@hooks';

type PropsType = {
  imageCode: string;
};

export const WeatherImage: React.FC<PropsType> = ({imageCode}) => {
  const styles = useThemedStyles(themedStyles);

  return (
    <Image
      style={styles.container}
      source={{
        uri: `https://openweathermap.org/img/wn/${imageCode}@2x.png`,
      }}
    />
  );
};

const themedStyles = createThemedStyles(theme => ({
  container: {
    width: 50,
    height: 50,
    backgroundColor: theme.colors.accent,
    borderRadius: 25,
  },
}));
