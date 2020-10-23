import { keyframes, css } from 'styled-components';

const loadWidth = (widthEnd) => keyframes` 
  0% {
    width: 0%;
  }
  100% {
    width: ${widthEnd}px;
  }`;

const loadOpacity = keyframes` 
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const loadEffect = (last, orderNr, opposite) => {
  const beforeWidth = last ? 180 : 200 - opposite;
  const BASE_TIME = 0.25;
  const order = (orderNr - 1) * 2;
  const orderBefore = order + 1;

  return css`
    animation: ${loadWidth(192)} ${BASE_TIME}s ease-in-out;
    animation-fill-mode: both;
    animation-delay: ${BASE_TIME * order}s;
    ::before {
      animation: ${loadWidth(beforeWidth)} ${BASE_TIME}s ease-in-out;
      animation-fill-mode: both;
      animation-delay: ${BASE_TIME * orderBefore}s;
    }
    ::after {
      animation: ${loadOpacity} ${BASE_TIME}s ease-in-out;
      animation-fill-mode: both;
      animation-delay: ${BASE_TIME * orderBefore}s;
    }
  `;
};
export default loadEffect;
