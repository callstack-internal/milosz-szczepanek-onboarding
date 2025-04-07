import React from 'react';
import {AppText} from './AppText.tsx';
import {View} from 'react-native';
import {createThemedStyles} from '@utils';
import {useThemedStyles} from '@hooks';

type PropsType = {
  message?: string;
};

export const DataNotAvailable: React.FC<PropsType> = ({message}) => {
  const styles = useThemedStyles(themedStyles);

  return (
    <View style={styles.container}>
      <AppText font="bodyBold" style={styles.text}>
        {message ||
          'Unfortunately service is currently unavailable. Please try again later'}
      </AppText>
    </View>
  );
};

const themedStyles = createThemedStyles(theme => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.sizes['4x'],
  },
  text: {
    textAlign: 'center',
  },
}));
