import { keyframes, css } from 'styled-components';

const growing = keyframes`
    0%{
        transform: rotate(50deg) scale(0,0.005);
    }
    50%{
        transform: rotate(50deg) scale(1,0.005);
    }
    100%{
        transform: rotate(50deg) scale(1,1);
    }`;

export const growingEffect = css`
  animation: ${growing} 4s ease-in-out;
`;

const border = keyframes`
    0%{
        transform:  scaleY(0);
    }
    100%{
        transform:  scaleY(1);
    }`;

export const borderEffect = css`
  content: '';
  animation: ${border} 1.5s ease-out both;
`;
