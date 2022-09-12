import {createTheme} from '@shopify/restyle';
import {TextStyle} from 'react-native';

const UNIT_MULTIPLIER = 4;

const getSizeValue = (index: number) => UNIT_MULTIPLIER * index;

const DEFAULT_STYLE_TEXT: TextStyle = {
  fontFamily: 'Poppins-Medium',
  fontWeight: '500',
  color: 'white',
  fontSize: getSizeValue(4),
};

export const theme = createTheme({
  colors: {
    black: '#221f1f',
    red: '#e50914',
    white: '#f5f5f1',
    gray: '#818488',
  },
  spacing: {
    1: getSizeValue(1),
    2: getSizeValue(2),
    3: getSizeValue(3),
    4: getSizeValue(4),
    5: getSizeValue(5),
    6: getSizeValue(6),
    7: getSizeValue(7),
    8: getSizeValue(8),
    9: getSizeValue(9),
    10: getSizeValue(10),
    11: getSizeValue(11),
    12: getSizeValue(12),
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    defaults: DEFAULT_STYLE_TEXT,
    regular: {
      fontFamily: 'Poppins-Regular',
      fontWeight: '400',
      color: 'white',
      fontSize: getSizeValue(4),
    },
    body: {...DEFAULT_STYLE_TEXT, color: 'gray'},
    subheader: {
      fontFamily: 'Poppins-SemiBold',
      fontWeight: '600',
      color: 'white',
      fontSize: getSizeValue(6),
    },
    header: {
      fontFamily: 'Poppins-Bold',
      fontWeight: '700',
      color: 'white',
      fontSize: getSizeValue(8),
    },
  },
});

export type Theme = typeof theme;
