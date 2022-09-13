import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

import {Box, Icon, Text} from '@internal/components';

const BaseIcon = (props: React.ComponentProps<typeof Icon>) => (
  <Icon size={20} color="white" {...props} />
);

const DEFAULT_MARGIN: React.ComponentProps<typeof Box>['margin'] = 0;
const COMMON_MARGIN: React.ComponentProps<typeof Box>['margin'] = 2;

export const Button = ({
  _containerProps,
  _textProps,
  _iconProps,
  ...rest
}: {
  _containerProps?: React.ComponentProps<typeof Box>;
  _textProps?: React.ComponentProps<typeof Text>;
  _iconProps?: {
    position: 'top' | 'right' | 'bottom' | 'left';
  } & React.ComponentProps<typeof Icon>;
} & TouchableOpacityProps) => (
  <TouchableOpacity {...rest}>
    <Box
      alignItems="center"
      flexDirection={
        !!_iconProps?.name && ['right', 'left'].includes(_iconProps?.position)
          ? 'row'
          : 'column'
      }
      {..._containerProps}>
      {!!_iconProps?.name && ['top', 'left'].includes(_iconProps?.position) && (
        <Box
          mb={_iconProps?.position === 'top' ? COMMON_MARGIN : DEFAULT_MARGIN}
          mr={_iconProps?.position === 'left' ? COMMON_MARGIN : DEFAULT_MARGIN}>
          <BaseIcon {..._iconProps} />
        </Box>
      )}

      {['string', 'number'].includes(typeof rest?.children) ? (
        <Text variant={_iconProps?.name ? 'body' : undefined} {..._textProps}>
          {rest?.children}
        </Text>
      ) : (
        rest?.children
      )}

      {!!_iconProps?.name &&
        ['bottom', 'right'].includes(_iconProps?.position) && (
          <Box
            mt={
              _iconProps?.position === 'bottom' ? COMMON_MARGIN : DEFAULT_MARGIN
            }
            ml={
              _iconProps?.position === 'right' ? COMMON_MARGIN : DEFAULT_MARGIN
            }>
            <BaseIcon {..._iconProps} />
          </Box>
        )}
    </Box>
  </TouchableOpacity>
);
