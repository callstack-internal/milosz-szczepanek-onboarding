import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {NavigationContainer} from '@react-navigation/native';
import {MainNavigator} from '@navigation';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
