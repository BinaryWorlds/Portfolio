import { keyframes, css } from 'styled-components';

const text = keyframes`
    0%{
        transform:  scaleX(1);
    }
    100%{
        transform: scaleX(0);
    }`;

const border = keyframes`
    0%{
        transform: translateX(99%) scaleY(0);
    }
    25%{
        transform: translateX(99%) scaleY(1);
    }
    100%{
        transform: translateX(0%);
    }`;

export const borderEffect = css`
  :before {
    animation: ${border} 2s ease-in-out both;
  }

  :after {
    background-color: #fff;
    animation: ${text} 1.5s ease-in-out 0.52s both;
  }
`;
