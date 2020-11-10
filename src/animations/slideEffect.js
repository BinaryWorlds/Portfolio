import { keyframes, css } from 'styled-components';

const slide = keyframes` 
  0% { 
    transform: translateX(100%);     
  }
  100% {
    transform: translateX(0);         
  }`;

const slideEffect = css`
  animation: ${slide} 0.75s ease-out;
`;

export default slideEffect;
