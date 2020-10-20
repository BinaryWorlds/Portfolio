import { keyframes, css } from 'styled-components';

const shake = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }    
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }  
  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }  
  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`;

const shakeEffect = css`
  animation: ${shake} 0.8s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
`;
export default shakeEffect;
