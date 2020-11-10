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

const growingEffect = css`
  animation: ${growing} 2s ease-in-out;
`;

export default growingEffect;
