import styled, { css } from 'styled-components';
import shakeEffect from '../../animations/shakeEffect';
import { visibleIn, visibleOut } from '../../animations/visible';
import ButtonSettings from '../ButtonSettings/ButtonSettings';

export const StyledWrapper = styled.div`
  z-index: 200;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  user-select: none;
  margin: auto 0;

  ${({ theme }) => theme.mq.middle} {
    align-items: baseline;
    margin-left: 3rem;
  }

  :before {
    content: '';
    z-index: 199;
    position: absolute;
    top: 0;
    left: -100%;
    width: 100vw;
    height: 100vh;
    background: white;
    opacity: 0;
    transition: opacity 0.5s linear, transform 0s ease 0.5s;

    ${({ isFullScreen }) =>
      isFullScreen &&
      css`
        transition-delay: 0s;
        transform: translateX(100%);
        opacity: 1;
      `}
  }
`;

export const StyledSection = styled.div`
  z-index: 201;
  position: relative;
  top: 0;
  right: 3%;
  margin-bottom: 2.5vh;
  min-width: 15rem;
  display: flex;
  align-items: baseline;
  transition: transform 0.5s ease-in-out;
  justify-content: space-between;

  ${({ isFullScreen, position: { goTop, goRight } }) =>
    isFullScreen &&
    css`
      transform: translate(${goRight}px, ${goTop}px);
    `}
`;

export const StyledButtonSettings = styled(ButtonSettings)`
  position: absolute;
  top: 0;
  left: -100%;
  padding: 0.4rem;
  ${({ isFullScreen }) => (isFullScreen ? visibleIn : visibleOut)}
`;

export const StyledButtonPlay = styled.button`
  z-index: 2;
  position: relative;
  background: transparent;
  cursor: pointer;
  outline: none;
  border: 0;

  font-size: ${({ theme }) => theme.fonts.size.s};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  margin-right: 3rem;

  :before {
    transform-origin: top left;
    content: '';
    z-index: -1;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 40%;
    left: 33%;
    background: ${({ theme }) => theme.colors.blue};
    transition: all 0.4s;
  }

  ${({ theme }) => theme.mq.huge} {
    font-size: ${({ theme }) => theme.fonts.size.l};
  }

  :hover:before,
  :focus-visible:before {
    transform: scale(0.5) translate(-6rem, -4rem);
  }

  ${({ animate }) => animate && shakeEffect(1)};
`;

export const StyledSettings = styled.div`
  z-index: 201;
  position: absolute;
  top: 10rem;
  right: 2rem;
  width: 30rem;
  height: 60rem;
  background: ${({ theme }) => theme.colors.blue};
  ${({ isActive }) => (isActive ? visibleIn : visibleOut)}
`;
