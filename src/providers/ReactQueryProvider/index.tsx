import React from 'react';
import {QueryClientProvider} from '@tanstack/react-query';

import {queryClient} from '@internal/config/react-query';

export const ReactQueryProvider = ({children}: {children: React.ReactNode}) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
