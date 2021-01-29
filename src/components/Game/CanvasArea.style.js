import styled, { css } from 'styled-components';

export const StyledCanvas = styled.canvas`
  z-index: 200;
  touch-action: manipulation;
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.2));
  image-rendering: pixelated;
  image-rendering: optimizespeed;

  transition: transform 0.5s ease-in-out;

  ${({ isFullScreen, position: { goTop, goLeft } }) =>
    isFullScreen &&
    css`
      transform: translate(${goLeft}px, ${goTop}px);
    `}
`;
