import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import HomeStack from './MainStackNavigator';

export default createAppContainer(
  createSwitchNavigator({
    Main: HomeStack,
  }),
);
