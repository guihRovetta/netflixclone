import React from 'react';

import {Box, Text} from '@internal/components';

export const Header = ({
  title,
  before,
  after,
}: {
  title: string;
  before?: React.ReactNode;
  after?: React.ReactNode;
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

      <Box alignItems="center">
        <Text>{title}</Text>
      </Box>
    </Box>
    {after}
  </Box>
);
