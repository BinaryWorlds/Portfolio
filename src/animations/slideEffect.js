import { keyframes, css } from 'styled-components';

const slide = keyframes` 
  0% { 
    opacity:0.75;
    transform: translateX(100%);     
  }
  100% {
    opacity:1;
    transform: translateX(0);         
  }`;

const slideEffect = css`
  animation: ${slide} 1s ease-out;
`;

export default slideEffect;
