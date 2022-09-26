import React from 'react';

import {
  ReactNavigationProvider,
  ReactQueryProvider,
  RestyleProvider,
} from '@internal/providers';

export const RootProvider = ({children}: {children?: React.ReactNode}) => (
  <RestyleProvider>
    <ReactQueryProvider>
      <ReactNavigationProvider />
      {children}
    </ReactQueryProvider>
  </RestyleProvider>
);
