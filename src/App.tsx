import {MainNavigator} from '@navigation';
import {AppProviders} from '@components';

const App = () => {
  return (
    <AppProviders>
      <MainNavigator />
    </AppProviders>
  );
};

export default App;
