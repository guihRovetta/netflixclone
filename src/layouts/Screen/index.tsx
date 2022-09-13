import React from 'react';
import {StatusBar, StatusBarProps} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Box} from '@internal/components';

export const Screen = ({
  statusBarProps,
  boxProps,
  children,
}: {
  statusBarProps?: StatusBarProps;
  boxProps?: React.ComponentProps<typeof Box>;
  children: React.ReactNode;
}) => (
  <>
    <StatusBar barStyle="light-content" {...statusBarProps} />

    <Box flex={1} bg="background" {...boxProps}>
      <SafeAreaView>{children}</SafeAreaView>
    </Box>
  </>
);
