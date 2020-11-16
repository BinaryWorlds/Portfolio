import { keyframes, css } from 'styled-components';

const triangle = keyframes`
    0%{
        transform:  scale(0);
    }
    100%{
        transform: scale(1);
    }`;

export const triangleEffect = css`
  :before,
  :after {
    transform-origin: top left;
    animation: ${triangle} 1.5s ease-in-out both;
  }
`;

const border = keyframes`
    0%{
         stroke-dashoffset: 290%;
    }
    100%{
         stroke-dashoffset: 0;
    }`;

export const borderEffect = css`
  animation: ${border} 1.5s ease-in-out both 0.6s;
`;

const fadeInOrder = keyframes`
    0%{
         opacity:0;
    }
    100%{
         opacity:1;
    }`;

export const fadeInOrderEffect = (order) => css`
  animation: ${fadeInOrder} 0.5s ease-in both ${order * 0.2 + 0.3}s;
`;
