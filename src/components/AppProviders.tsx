import React, {PropsWithChildren} from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {NavigationContainer} from '@react-navigation/native';
import Toast from 'react-native-toast-message';

const queryClient = new QueryClient();

export const AppProviders: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>{children}</NavigationContainer>
      <Toast />
    </QueryClientProvider>
  );
};
