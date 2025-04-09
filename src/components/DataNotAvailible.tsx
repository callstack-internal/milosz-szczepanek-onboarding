import React from 'react';
import {AppText} from './AppText.tsx';
import {View} from 'react-native';
import {createThemedStyles} from '@utils';
import {useThemedStyles} from '@hooks';
import {useTranslation} from 'react-i18next';

type PropsType = {
  message?: string;
};

export const DataNotAvailable: React.FC<PropsType> = ({message}) => {
  const {t} = useTranslation();
  const styles = useThemedStyles(themedStyles);

  return (
    <View style={styles.container}>
      <AppText font="bodyBold" style={styles.text}>
        {message || t('general:serviceUnavailable')}
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
