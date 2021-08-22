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
    scrollbar-face-color: #646464;
    scrollbar-base-color: #646464;
    scrollbar-3dlight-color: #646464;
    scrollbar-highlight-color: #646464;
    scrollbar-track-color: #000;
    scrollbar-arrow-color: #000;
    scrollbar-shadow-color: #646464;
    scrollbar-darkshadow-color: #646464;
  }

  ::-webkit-scrollbar { width: 8px; height: 8px;}
  ::-webkit-scrollbar-button {  background-color: #666; }
  ::-webkit-scrollbar-track {  background-color: #646464;}
  ::-webkit-scrollbar-track-piece { background-color: #000;}
  ::-webkit-scrollbar-thumb { height: 20px; background-color: #666; border-radius: 5px;}
  ::-webkit-scrollbar-corner { background-color: #646464;}
  ::-webkit-resizer { background-color: #666;}

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
  input,
  textarea,
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
