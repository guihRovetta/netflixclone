import React from 'react';

import {ReactNavigationProvider, RestyleProvider} from '@internal/providers';

export const RootProvider = ({children}: {children?: React.ReactNode}) => (
  <RestyleProvider>
    <ReactNavigationProvider />
    {children}
  </RestyleProvider>
);
