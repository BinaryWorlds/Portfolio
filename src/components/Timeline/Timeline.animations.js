import { keyframes, css } from 'styled-components';

const timeIn = keyframes` 
  0% {
    opacity: 0;
    transform: translateY(-120%);
  }
  100% {
  }`;

export const timeInEffect = css`
  animation: ${timeIn} 0.4s ease-out both;
`;

const timeOut = keyframes` 
  0% {
  }
  100% {
    transform: translateY(120%);
    opacity: 0;
  }`;

export const timeOutEffect = css`
  animation: ${timeOut} 0.4s ease-in both;
`;

const lineIn = keyframes` 
  0% {
    transform: scaleX(1);

  }
  100% {
      transform: scaleX(2.5);
  }`;

export const lineInEffect = css`
  background-color: ${({ theme }) => theme.colors.red};
  animation: ${lineIn} 0.4s ease-out both;
`;

const lineOut = keyframes` 
0% {
  transform: scaleX(2.5);

}
100% {
    transform: scaleX(1);
}`;

export const lineOutEffect = css`
  background-color: ${({ theme }) => theme.colors.red};
  animation: ${lineOut} 0.4s ease-in both;
`;

const show = keyframes` 
  0% { 
    opacity:0.75;
    transform: translateX(-100%);     
  }
  100% {
    opacity:1;
    transform: translateX(0);         
  }`;

export const showEffect = css`
  animation: ${show} 0.5s ease-out both;
`;

const hide = keyframes` 
  0% { 
  
    }
  100% {
    opacity:0;
    transform: translateX(-100%);     
     
  }`;
export const hideEffect = css`
  animation: ${hide} 0.5s ease-in both;
`;
