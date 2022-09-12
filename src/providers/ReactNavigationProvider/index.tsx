import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {RootNavigator} from '@internal/navigation';

export const ReactNavigationProvider = () => (
  <NavigationContainer>
    <RootNavigator />
  </NavigationContainer>
);
