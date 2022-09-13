import React from 'react';
import {TextProps as RNTextProps} from 'react-native';
import {createText, TextProps} from '@shopify/restyle';

import {Theme} from '@internal/themes';

const RestyleText = createText<Theme>();

export const Text = (props: TextProps<Theme> & RNTextProps) => (
  <RestyleText {...props} />
);
