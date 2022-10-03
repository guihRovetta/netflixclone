import React from 'react';
import {
  Placeholder,
  Fade,
  PlaceholderMedia,
  PlaceholderLine,
} from 'rn-placeholder';
import {PlaceholderProps} from 'rn-placeholder/lib/Placeholder';
import {PlaceholderLineProps} from 'rn-placeholder/lib/PlaceholderLine';
import {PlaceholderMediaProps} from 'rn-placeholder/lib/PlaceholderMedia';

import {theme} from '@internal/themes';

const DEFAULT_COLOR = theme.colors.black;

const COMMON_STYLE: PlaceholderLineProps['style'] = {
  borderRadius: theme.spacing['2'],
  marginBottom: theme.spacing['4'],
};

const Line = (props: PlaceholderLineProps) => (
  <PlaceholderLine color={DEFAULT_COLOR} style={COMMON_STYLE} {...props} />
);

const Media = (props: PlaceholderMediaProps) => (
  <PlaceholderMedia color={DEFAULT_COLOR} style={COMMON_STYLE} {...props} />
);

export const Skeleton = (props: PlaceholderProps) => (
  <Placeholder Animation={Fade} {...props} />
);

Skeleton.Line = Line;
Skeleton.Media = Media;
