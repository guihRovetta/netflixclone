import {createTheme} from '@shopify/restyle';
import {TextStyle} from 'react-native';

const UNIT_MULTIPLIER = 4;

const getSizeValue = (index: number) => UNIT_MULTIPLIER * index;

const DEFAULT_STYLE_TEXT: TextStyle = {
  fontFamily: 'Poppins-Medium',
  fontWeight: '500',
  color: 'white',
  fontSize: getSizeValue(3.5),
};

const PALLETE = {
  black: '#221f1f',
  red: '#e50914',
  white: '#f5f5f1',
  gray: '#818488',
  limeGreen: '#32CD32',
  deepSkyBlue: '#00BFFF',
  yellow: '#FFFF00',
  orange: '#FFA500',
};

export const theme = createTheme({
  colors: {
    background: PALLETE.black,
    black: PALLETE.black,
    red: PALLETE.red,
    white: PALLETE.white,
    gray: PALLETE.gray,
    green: PALLETE.limeGreen,
    blue: PALLETE.deepSkyBlue,
    yellow: PALLETE.yellow,
    orange: PALLETE.orange,
  },
  spacing: {
    0: getSizeValue(0),
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
    16: getSizeValue(16),
    20: getSizeValue(20),
    none: getSizeValue(0),
    xxs: getSizeValue(0.5),
    xs: getSizeValue(1),
    s: getSizeValue(2),
    m: getSizeValue(4),
    l: getSizeValue(6),
    xl: getSizeValue(8),
    xxl: getSizeValue(10),
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    small: {
      ...DEFAULT_STYLE_TEXT,
      fontSize: getSizeValue(2.5),
    },
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
      fontSize: getSizeValue(5),
    },
    header: {
      fontFamily: 'Poppins-Bold',
      fontWeight: '700',
      color: 'white',
      fontSize: getSizeValue(6),
    },
  },
});

export type Theme = typeof theme;
