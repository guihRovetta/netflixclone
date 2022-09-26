import React from 'react';

import {Box, Text} from '@internal/components';

export const Header = ({
  title,
  before,
  after,
  actions,
}: {
  title: string;
  before?: React.ReactNode;
  after?: React.ReactNode;
  actions?: React.ReactNode;
}) => (
  <Box>
    {before}

    <Box
      alignItems="center"
      justifyContent="space-between"
      flexDirection="row"
      px={6}
      py={4}>
      <Text variant="header">{title}</Text>

      <Box alignItems="center" flexDirection="row">
        {actions}
      </Box>
    </Box>

    {after}
  </Box>
);
