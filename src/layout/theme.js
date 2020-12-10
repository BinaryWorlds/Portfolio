import colors from './colors';
import fonts from './fonts';

const theme = {
  colors,
  fonts,
  mq: {
    phone: `@media (max-width:599px)`,
    tablet: `@media (min-width:600px)`,
    middle: `@media (min-width:900px)`,
    desktop: `@media (min-width:1200px)`,
    hd: `@media (min-width:1800px)`,
    huge: `@media (min-width:2100px)`,
  },
};

export default theme;
