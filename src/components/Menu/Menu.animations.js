import { keyframes, css } from 'styled-components';

const loadWidth1 = keyframes` 
  0% {
    transform: rotate(30deg) scale(0,1);        
  }
  100% {
    transform: rotate(30deg) scale(1,1);
  }`;

const loadWidth2 = keyframes` 
  0% {
    transform: rotate(-30deg) skewX(-30deg) scale(0,1) translateZ(-1px);
  }
  100% {
    transform: rotate(-30deg) skewX(-30deg) scale(1,1) translateZ(-1px);
  }`;

const loadOpacity = keyframes` 
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const loadEffect = (orderNr) => {
  const BASE_TIME = 0.25;
  const order = (orderNr - 1) * 2;
  const orderBefore = order + 1;

  return css`
    animation: ${loadWidth1} ${BASE_TIME}s ease-in-out;
    animation-delay: ${BASE_TIME * order}s;
    animation-fill-mode: both;

    ::before {
      animation: ${loadWidth2} ${BASE_TIME}s ease-in-out;
      animation-delay: ${BASE_TIME * orderBefore}s;
      transform-origin: top right;
      animation-fill-mode: both;
    }

    ::after {
      animation: ${loadOpacity} ${BASE_TIME}s ease-in-out;
      animation-delay: ${BASE_TIME * orderBefore}s;
      animation-fill-mode: both;
    }
  `;
};

export default loadEffect;
