import { keyframes, css } from 'styled-components';

const slideX = keyframes` 
  0% { 
    opacity:0.5;
    transform: translateX(100%);     
  }
  100% {
    opacity:1;
    transform: translateX(0);         
  }`;

const slideXEffect = css`
  animation: ${slideX} 1s ease-out;
`;

export default slideXEffect;
