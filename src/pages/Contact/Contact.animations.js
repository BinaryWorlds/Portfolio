import { keyframes, css } from 'styled-components';

const left = `translateX(50%) rotate3d(1, 1, 1, 120deg)`;
const center = `rotate3d(1, 1, 1, 120deg)`;
const right = `translateX(-75%) rotate3d(1, 1, 1, 120deg)`;

const spin = (property) => keyframes`
  0%{
      transform: ${property};
      opacity:0;
  }
  50%{
      opacity:1;
  }
  100%{
  }`;

export const spin3dEffect = css`
  span,
  div:nth-of-type(2) {
    animation: ${spin(left)} 1.5s ease-out both;
  }

  div:nth-of-type(1) {
    animation: ${spin(center)} 1.5s ease-out both;
  }
`;

export const formEffect = css`
  form {
    animation: ${spin(right)} 1.5s ease-out both;
  }
`;
