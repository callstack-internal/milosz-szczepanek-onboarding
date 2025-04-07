import React from 'react';
import {ActivityIndicator, ActivityIndicatorProps} from 'react-native';
import {createThemedStyles} from '@utils';
import {useThemedStyles} from '@hooks';

export const AppActivityIndicator: React.FC<ActivityIndicatorProps> = props => {
  const styles = useThemedStyles(themedStyles);

  return <ActivityIndicator style={styles.container} {...props} />;
};

const themedStyles = createThemedStyles(theme => ({
  container: {
    padding: theme.sizes['4x'],
  },
}));
