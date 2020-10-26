import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from './theme';
import SEO from '../components/SEO';

const GlobalStyle = createGlobalStyle`

  html {
    font-size: 62.5%;
  }
  * {
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
    font-family: inherit;
    color: ${theme.colors.text};
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  body {
    font-family: ${theme.fonts.family.notoSans};
    min-width:320px;
  }
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <SEO />
      <GlobalStyle />
      {children}
    </>
  </ThemeProvider>
);

export default Layout;
