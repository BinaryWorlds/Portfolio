import styled, { css } from 'styled-components';
import shakeEffect from '../../animations/shakeEffect';
import { visibleIn, visibleOut } from '../../animations/visible';
import Button from '../ButtonSettings/ButtonSettings';
import { BasicHint } from '../../hooks/useHint';

export const Section = styled.div`
  z-index: 201;
  position: relative;
  top: 0;
  right: 3%;
  margin-bottom: 2.5vh;
  min-width: 15rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: transform 0.5s ease-in-out;

  ${({ theme }) => theme.mq.huge} {
    min-width: 25rem;
  }

  ${({ isFullScreen, position: { goTop, goRight } }) =>
    isFullScreen &&
    css`
      transition-duration: 0s;
      transform: translate(${goRight}px, ${goTop}px);
    `}
`;

export const ButtonSettings = styled(Button)`
  position: absolute;
  top: 0;
  left: -100%;
  padding: 0.4rem;

  ${({ theme }) => theme.mq.huge} {
    font-size: ${({ theme }) => theme.fonts.size.l};
  }

  ${({ isFullScreen }) => (isFullScreen ? visibleIn : visibleOut)}
`;

export const ButtonPlay = styled.button`
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

export const Hint = styled(BasicHint)`
  bottom: -150%;
  left: 0;
`;
