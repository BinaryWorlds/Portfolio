import { keyframes, css } from 'styled-components';

const effect = {
  left: `translateX(25%) rotate3d(1, 1, 1, 120deg)`,
  center: `rotate3d(1, 1, 1, 120deg)`,
  right: `translateX(-100%) rotate3d(1, 1, 1, 120deg)`,
};

const spin = (side) => keyframes`
  0%{
      transform: ${effect[side]};
      opacity:0;
  }
  50%{
      opacity:1;
  }
  100%{
  }`;

export const spin3dEffect = (side) => css`
  animation: ${spin(side)} 1.5s ease-out both;
`;
