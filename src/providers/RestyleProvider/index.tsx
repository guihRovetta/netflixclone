import React from 'react';
import {ThemeProvider} from '@shopify/restyle';

import {theme} from '@internal/themes';

export const RestyleProvider = ({children}: {children: React.ReactNode}) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
