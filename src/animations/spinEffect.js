import { keyframes, css } from 'styled-components';

const spin = keyframes` 
  0% {
    opacity:0;
    transform: rotate3d(0.25,0.25,0.25,-90deg);
  }
  100% {
    transform: rotate3d(0);
  }`;

const spinEffect = (order = 1) => css`
  animation: ${spin} 1.25s ${0.3 * order}s ease-out both;
`;

export default spinEffect;
