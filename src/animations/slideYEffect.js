import { keyframes, css } from 'styled-components';

const slideY = keyframes` 
  0% { 
    transform: translateY(-150%);     
  }
  100% {
    transform: translateY(0);         
  }`;

const slideYEffect = css`
  animation: ${slideY} 1s ease-out;
`;

export default slideYEffect;
