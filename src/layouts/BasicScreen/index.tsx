import React from 'react';

import {Screen, Header} from '@internal/layouts';

export const BasicScreen = ({
  screenProps,
  headerProps,
  children,
}: {
  screenProps?: Omit<React.ComponentProps<typeof Screen>, 'children'>;
  headerProps?: React.ComponentProps<typeof Header>;
  children?: React.ReactNode;
}) => (
  <Screen {...screenProps}>
    {headerProps?.title && <Header {...headerProps} />}

    {children}
  </Screen>
);
