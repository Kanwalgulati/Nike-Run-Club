import {View, Text} from 'react-native';
import React from 'react';
import HomeScreen from './src/screens/Home';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>
  );
};

export default App;
