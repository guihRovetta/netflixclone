import React from 'react';

import {Box, Text} from '@internal/components';
import {BasicScreen} from '@internal/layouts';

export const EmptyScreen = () => (
  <BasicScreen>
    <Box alignItems="center" justifyContent="center" height="100%">
      <Text variant="header">Sem conteúdo</Text>
      <Text variant="body">em breve ??</Text>
    </Box>
  </BasicScreen>
);
