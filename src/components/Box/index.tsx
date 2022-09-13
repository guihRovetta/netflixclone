import React from 'react';
import {ViewProps} from 'react-native';
import {createBox, BoxProps} from '@shopify/restyle';

import {Theme} from '@internal/themes';

const ShopifyBox = createBox<Theme>();

export const Box = (props: BoxProps<Theme> & ViewProps) => (
  <ShopifyBox {...props} />
);
