import React from 'react';

import {Box, Text} from '@internal/components';
import {Theme} from '@internal/themes';
import {Item} from '@internal/server/mirage-js';

const DEFAULT_SQUARE_SIZE = 36;
const PARENTAL_RATING_OBJ: Record<
  string,
  {color: keyof Theme['colors']; label: Item['parentalRating']}
> = {
  all: {color: 'green', label: 'L'},
  10: {color: 'blue', label: '10'},
  12: {color: 'yellow', label: '12'},
  14: {color: 'orange', label: '14'},
  16: {color: 'red', label: '16'},
  18: {color: 'black', label: '18'},
};

export const ParentalRatingIndicator = ({value}: {value: string}) => (
  <Box
    width={DEFAULT_SQUARE_SIZE}
    height={DEFAULT_SQUARE_SIZE}
    alignItems="center"
    p={2}
    bg={PARENTAL_RATING_OBJ[value]?.color}
    borderRadius={4}
    borderWidth={1}
    borderColor="white">
    <Text color={value === '12' ? 'black' : 'white'} fontWeight="600">
      {PARENTAL_RATING_OBJ[value]?.label}
    </Text>
  </Box>
);
