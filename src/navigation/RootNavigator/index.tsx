import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from '@shopify/restyle';

import {Theme} from '@internal/themes';
import {EmptyScreen, NewsScreen} from '@internal/screens';
import {Icon} from '@internal/components';

export type RootNavigatorParamList = {
  Home: undefined;
  News: undefined;
  QuickLaughs: undefined;
  Downloads: undefined;
};

const Tab = createBottomTabNavigator<RootNavigatorParamList>();

export const RootNavigator = () => {
  const theme = useTheme<Theme>();

  return (
    <Tab.Navigator
      detachInactiveScreens
      screenOptions={{
        unmountOnBlur: true,
        headerShown: false,
        tabBarInactiveTintColor: theme.colors.gray,
        tabBarActiveTintColor: theme.colors.white,
        tabBarIconStyle: {width: 16, height: 16},
        tabBarStyle: {
          backgroundColor: theme.colors.black,
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={EmptyScreen}
        options={{
          unmountOnBlur: false,
          tabBarLabel: 'Início',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={NewsScreen}
        options={{
          unmountOnBlur: false,
          tabBarLabel: 'Novidades',
          tabBarIcon: ({color, size}) => (
            <Icon
              type="MaterialCommunityIcons"
              name="play-box-multiple"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="QuickLaughs"
        component={EmptyScreen}
        options={{
          unmountOnBlur: false,
          tabBarLabel: 'Risadas rápidas',
          tabBarIcon: ({color, size}) => (
            <Icon type="Fontisto" name="laughing" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Downloads"
        component={EmptyScreen}
        options={{
          unmountOnBlur: false,
          tabBarLabel: 'Downloads',
          tabBarIcon: ({color, size}) => (
            <Icon
              type="MaterialCommunityIcons"
              name="download-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
