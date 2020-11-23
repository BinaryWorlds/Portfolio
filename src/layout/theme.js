import colors from './colors';
import fonts from './fonts';

const theme = {
  colors,
  fonts,
  mq: {
    phone: `@media (max-width:599px)`,
    tablet: `@media (min-width:600px) and (max-width:899px)`,
    middle: `@media (min-width:900px) and (max-width:1199px)`,
    desktop: `@media (min-width:1200px) and (max-width:1799px) `,
    huge: `@media (min-width:1800px)`,
  },
};

export default theme;
