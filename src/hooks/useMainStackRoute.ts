import {RouteProp, useRoute} from '@react-navigation/native';
import {MainStackParams} from '@types';

export const useMainStackRoute = <T extends keyof MainStackParams>() =>
  useRoute<RouteProp<MainStackParams, T>>();
