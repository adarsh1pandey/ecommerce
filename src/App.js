import 'react-native-gesture-handler';
import React from 'react';
import ApplicationNavigator from './navigators/Application';
import { Provider } from 'react-redux';
import { store } from './store /store';

const App = () => {
  return (
    <Provider store={store}>
      <ApplicationNavigator />
    </Provider>
  );
};
export default App;
