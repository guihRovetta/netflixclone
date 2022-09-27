import React from 'react';
import FastImage, {FastImageProps} from 'react-native-fast-image';

import {Box} from '@internal/components/Box';

export const Image = ({
  _containerProps,
  ...rest
}: {_containerProps?: React.ComponentProps<typeof Box>} & FastImageProps) => (
  <Box {..._containerProps}>
    <FastImage {...rest} />
  </Box>
);
