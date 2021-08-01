import { colors } from './colors';

export const bp = {
  // px / 16 = em
  sm: '37.5', // 600
  md: '56.25', // 900
  lg: '75', // 1200
  xl: '112.5', // 1800
};

const theme = {
  colors,
  mq: {
    landscape: `@media (orientation: landscape)`,
    portrait: `@media (orientation: portrait)`,
    sm: `@media (min-width: ${bp.sm}em)`,
    md: `@media (min-width: ${bp.md}em)`,
    lg: `@media (min-width: ${bp.lg}em)`,
    xl: `@media (min-width: ${bp.xl}em)`,
  },
  fontSize: {
    0: { sm: '1.4rem', md: '1.8rem', lg: '2.1rem' },
    1: { sm: '1.6rem', md: '2rem', lg: '2.4rem' },
    2: { sm: '1.8rem', md: '2.3rem', lg: '2.7rem' },
    3: { sm: '3.2rem', md: '4rem', lg: '4.8rem' },
    4: { sm: '3.6rem', md: '4.5rem', lg: '5.4rem' },
    5: { sm: '4.2rem', md: '5.2rem', lg: '6.3rem' },
  },
  fontWeight: {
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
    extraBold: '800',
    black: '900',
  },
  fontFamily: {
    default: 'Dosis, sans-serif',
    decoration: 'Exo, sans-serif',
  },
};

export default theme;
