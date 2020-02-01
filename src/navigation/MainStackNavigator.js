import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen';
import NetworkScreen from '../screens/NetworkScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Network: NetworkScreen,
});

export default HomeStack;
