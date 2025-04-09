import React, {PropsWithChildren} from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {NavigationContainer} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import {KeyboardProvider} from 'react-native-keyboard-controller';
import {I18nextProvider} from 'react-i18next';
import {i18n} from '@configs';

const queryClient = new QueryClient();

export const AppProviders: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <KeyboardProvider>
          <NavigationContainer>{children}</NavigationContainer>
          <Toast />
        </KeyboardProvider>
      </I18nextProvider>
    </QueryClientProvider>
  );
};
