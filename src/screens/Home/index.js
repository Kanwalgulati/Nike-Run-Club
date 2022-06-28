/**
 * *In this file we have the tabs navigator assembled for the home screen
 */

import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import RunScreen from './Run';
import ActivityScreen from './Activity';
import Colors from '../../../constants/colors';
const Tab = createMaterialTopTabNavigator();
const HomeScreen = () => {
  let {tabsColor} = Colors;
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {color: tabsColor, fontWeight: 'bold'},
      }}>
      <Tab.Screen
        name="Startarun"
        component={RunScreen}
        options={{
          tabBarLabelStyle: {color: tabsColor, fontWeight: 'bold'},
          tabBarLabel: 'Start a Run',
        }}
      />
      <Tab.Screen name="Activity" component={ActivityScreen} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
