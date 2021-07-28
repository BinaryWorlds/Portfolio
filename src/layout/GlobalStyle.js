import { createGlobalStyle } from 'styled-components';
import { sanitize } from './sanitize';

const GlobalStyle = createGlobalStyle`
  ${sanitize};

  body,
  html {
    height: 100%;
  }

  html {
    font-size: 62.5%;
  }

  * {
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
    font-family: inherit;
    color: ${({ theme }) => theme.colors.primary};
  }

  *::selection {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.highlight};
  }

  body {
    width:100%;
    font-family: ${({ theme }) => theme.fontFamily.default};
    background: ${({ theme }) => theme.colors.bg};
  }

  button{
    background: transparent;
    cursor: pointer;
    outline: none;
    border: none;
  }

  button,
  a {
    :focus-visible {
      outline: 2px solid ${({ theme }) => theme.colors.primary};
    }
  }

  a,
  input,
  textarea,
  button,
  select {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
`;

export default GlobalStyle;
