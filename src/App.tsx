import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';
import AppContextProvider from './hooks';

const App: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#312e38" />
    <AppContextProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </AppContextProvider>
  </>
);

export default App;
