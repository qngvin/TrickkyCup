/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import NavigatorUser from './src/navigator/NavigatorUser';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <NavigatorUser />
    </NavigationContainer>
  );
};

export default App;
