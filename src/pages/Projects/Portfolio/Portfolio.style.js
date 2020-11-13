import styled, { css } from 'styled-components';
import fadeIn from '../../../animations/fadeIn';
import fadeOut from '../../../animations/fadeOut';
import { growingEffect, borderEffect } from './Portfolio.animations';

export const StyledWrapper = styled.div`
  overflow: hidden;
  padding: 0 10%;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  ${({ isUnmounted }) => (isUnmounted ? fadeIn : fadeOut)}
`;

export const StyledImageWrapper = styled.div`
  z-index: -1;
  position: absolute;
  top: -2%;
  right: -10%;
  transform: rotate(50deg);
  width: 48%;
  padding-top: 30.5%;

  :before {
    content: 'Mockup Adobe Xd';
    transform: translate3d(0, 0, 0);
    position: absolute;
    bottom: -3rem;
    right: 15%;
    left: 0;
    text-align: center;
    font-size: ${({ theme }) => theme.fonts.size.s};
  }

  :after {
    content: '';
    position: absolute;
    bottom: -22.5rem;
    left: 0;
    height: 25rem;
    border-left: 1px solid rgba(112, 112, 112);
    transform-origin: top left;
    ${({ isUnmounted }) => isUnmounted && borderEffect}
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
`;

export const StyledTitle = styled.h1`
  position: absolute;
  left: -1.2rem;
  bottom: -23rem;
  ${({ isEn }) =>
    isEn &&
    css`
      left: -3rem;
      bottom: -25rem;
    `}
  transform-origin: bottom left;
  transform: rotate(-50deg) translate3d(0, 0, 0);
  font-size: ${({ theme }) => theme.fonts.size.l};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  white-space: pre-wrap;
  letter-spacing: 0.5px;

  :after {
    position: absolute;
    bottom: 0;
    height: 15rem;
    border-right: 1px solid rgba(112, 112, 112);
    transform-origin: bottom right;
    ${({ isWritten }) => isWritten && borderEffect}
    animation-delay: 0.25s;
  }
`;

export const StyledBackground = styled.div`
  position: absolute;
  z-index: -3;
  bottom: 0;
  right: 60%;
  transform: rotate(50deg);
  transform-origin: right bottom;

  width: 54vw;
  height: 27vw;
  border-color: rgba(112, 112, 112);
  border-bottom: 1px solid;
  border-right: 1px solid;

  :before,
  :after {
    content: '';
    z-index: -1;
    position: absolute;
    bottom: -1px;
    background: ${({ theme }) => theme.colors.pinkA};
    border: 1px solid rgba(112, 112, 112, 0.5);
  }

  :before {
    width: 24vw;
    height: 14.85vw;
    left: 3vw;
  }

  :after {
    width: 14.85vw;
    height: 24vw;
    right: -1px;
  }
  ${({ isUnmounted }) => isUnmounted && growingEffect}
`;

export const StyledDescription = styled.div`
  position: relative;
  top: 30%;
  left: -12vw;
  width: 40vw;
  max-width: 450px;
  display: flex;
  flex-direction: column;

  & span {
    font-size: ${({ theme }) => theme.fonts.size.s};
    padding-top: 2rem;
  }
`;
