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

  *::selection {
    color: black;
    background-color: rgba(0,0,0,0.07);
  }
  
  body {
    font-family: ${theme.fonts.family.notoSans};
    min-width:320px;
  }
  
  button, a{
    :focus-visible {
    outline: 2px solid black;
  }
  
  }
`;

const Layout = ({ children, extend }) => (
  <ThemeProvider theme={{ ...theme, ...extend }}>
    <>
      <SEO />
      <GlobalStyle />
      {children}
    </>
  </ThemeProvider>
);

export default Layout;
