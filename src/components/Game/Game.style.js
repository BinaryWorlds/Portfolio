import styled, { css } from 'styled-components';

export const StyledWrapper = styled.div`
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  user-select: none;
  margin: auto 0;
  transition: z-index 0s step-start 0.5s;

  ${({ theme }) => theme.mq.middle} {
    align-items: flex-start;
    margin-left: 3rem;
  }

  :before {
    content: '';
    z-index: 199;
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100vh;
    background: white;
    opacity: 0;
    transition: opacity 0.5s linear, transform 0s ease 0.5s;
  }

  ${({ isFullScreen }) =>
    isFullScreen &&
    css`
      z-index: 200;
      transition-delay: 0s;

      :before {
        transition-delay: 0s;
        transform: translateX(100%);
        opacity: 1;
      }
    `}
`;
