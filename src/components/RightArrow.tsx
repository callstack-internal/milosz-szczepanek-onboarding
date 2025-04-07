import React from 'react';
import {AppText} from './AppText.tsx';
import {useTheme} from '@hooks';

type PropsType = {
  testID?: string;
};

export const RightArrow: React.FC<PropsType> = ({testID}) => {
  const {colors} = useTheme();

  return (
    <AppText font="h1" color={colors.grey} testID={testID}>
      {'>'}
    </AppText>
  );
};
