import { keyframes, css } from 'styled-components';

const spin = keyframes` 
  0% {
    opacity:0;
    transform: rotate(-45deg) scale(0.25,0.25);        
  }
  100% {
    transform: rotate(0) scale(1,1);
  }`;

const spinEffect = css`
  animation: ${spin} 0.75s ease-out;
`;

export default spinEffect;
