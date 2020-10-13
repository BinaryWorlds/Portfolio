import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
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
  }
`;

const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <SEO />
      <GlobalStyle />
      <StyledWrapper>{children}</StyledWrapper>
    </>
  </ThemeProvider>
);

export default Layout;
