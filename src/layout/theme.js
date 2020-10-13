import colors from './colors';
import fonts from './fonts';

const theme = {
  colors,
  fonts,
  mq: {
    tablet: `@media (min-width:768px)`,
    desktop: `@media (min-width:1024px)`,
    huge: `@media (min-width:1440px)`,
  },
};

export default theme;
