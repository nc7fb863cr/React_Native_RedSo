import React from 'react';
import { AppRegistry, View } from 'react-native';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import Store from './models/Store';

import MainScreen from './screens/MainScreen';

export default function App() {
  return (
    <Provider store={Store}>
      <MainScreen/>  
    </Provider>        
  );
}

AppRegistry.registerComponent(appName, () => App);
