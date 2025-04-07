import {useNavigation} from '@react-navigation/native';
import {MainStackParams} from '@types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const useMainNavigation = () =>
  useNavigation<NativeStackNavigationProp<MainStackParams>>();
