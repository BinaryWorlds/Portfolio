import styled, { css } from 'styled-components';
import fadeIn from '../../../animations/fadeIn';
import fadeOut from '../../../animations/fadeOut';
import { growingEffect, borderEffect } from './Portfolio.animations';

import Image from '../../../components/Image/Image';

export const StyledWrapper = styled.div`
  overflow: hidden;
  padding: 0 10%;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  ${({ theme: { isUnmounted } }) => (isUnmounted ? fadeIn : fadeOut)}
`;

export const StyledImage = styled(Image)`
  position: absolute;
  z-index: -1;
  top: 6%;
  right: -25%;
  transform: rotate(50deg);
  width: 60%;

  :before {
    content: 'Mockup Adobe Xd';
    transform: translate3d(0, 0, 0);
    position: absolute;
    bottom: -3.5rem;
    right: 15%;
    left: 0;
    text-align: center;
    font-size: ${({ theme }) => theme.fonts.size.s};
  }

  :after {
    content: '';
    position: absolute;
    left: 0;
    height: 22.5rem;
    border-left: 1px solid rgba(112, 112, 112);

    transform-origin: top left;
    ${({ theme: { isUnmounted } }) => isUnmounted && borderEffect}
  }

  ${({ theme }) => theme.mq.middle} {
    top: -2%;
    right: -15%;
    width: 48%;
  }

  ${({ theme }) => theme.mq.desktop} {
    right: -10%;
  }

  ${({ theme }) => theme.mq.huge} {
    :before {
      font-size: ${({ theme }) => theme.fonts.size.m};
    }

    :after {
      height: 37rem;
    }
  }
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

  ${({ theme }) => theme.mq.middle} {
    bottom: -23rem;
    ${({ isEn }) =>
      isEn &&
      css`
        bottom: -25rem;
      `}
  }

  ${({ theme }) => theme.mq.huge} {
    font-size: ${({ theme }) => theme.fonts.size.xxl};
    left: -2.1rem;
    bottom: -39rem;

    :after {
      height: 24rem;
    }

    ${({ isEn }) =>
      isEn &&
      css`
        left: -5.2rem;
        bottom: -43rem;
      `}
  }
`;

export const StyledBackground = styled.div`
  position: absolute;
  z-index: -3;
  bottom: 0;
  right: 42%;
  transform: rotate(50deg);
  transform-origin: right bottom;

  width: 80vw;
  height: 40vw;
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
    width: 44.4%;
    height: 55%;
    left: 5.5%;
  }

  :after {
    width: 27.5%;
    height: 89%;
    right: -1px;
  }
  ${({ theme: { isUnmounted } }) => isUnmounted && growingEffect}

  ${({ theme }) => theme.mq.middle} {
    right: 55%;
    width: 60vw;
    height: 30vw;
  }

  ${({ theme }) => theme.mq.desktop} {
    right: 60%;
    width: 54vw;
    height: 27vw;
  }
`;

export const StyledDescription = styled.div`
  position: relative;
  top: 29%;
  width: 50vw;
  display: flex;
  flex-direction: column;

  & span {
    font-size: ${({ theme }) => theme.fonts.size.s};
    padding-top: 2rem;
  }

  ${({ theme }) => theme.mq.middle} {
    left: 2vw;
    top: 27%;
    width: 45vw;
    max-width: 45rem;
  }

  ${({ theme }) => theme.mq.desktop} {
    left: -5vw;
  }

  ${({ theme }) => theme.mq.hd} {
    left: -12vw;
    top: 30%;
    width: 40vw;
  }

  ${({ theme }) => theme.mq.huge} {
    max-width: 65rem;
    & span {
      font-size: ${({ theme }) => theme.fonts.size.m};
    }
  }
`;
