import styled, { css } from 'styled-components';
import fadeIn from '../../../animations/fadeIn';
import { growingEffect, borderEffect } from './Portfolio.animations';

import Img from '../../../components/Image/Image';

export const Wrapper = styled.div`
  overflow: hidden;
  padding: 0 10%;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;

  ${({ theme }) => theme.mq.phone} {
    padding: 5%;
    margin: 10% 0;
  }

  ${fadeIn}
`;

export const Image = styled(Img)`
  position: absolute;
  z-index: -1;
  top: 6%;
  right: -25%;
  width: 60%;

  :before {
    content: 'Mockup Adobe Xd';
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
    border-left: 1px solid rgb(112, 112, 112);
  }

  ${({ theme }) => theme.mq.phone} {
    :before {
      left: unset;
      font-size: ${({ theme }) => theme.fonts.size.xs};
    }

    :after {
      height: 18rem;
    }
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

  transform: rotate3d(0, 0, 1, 50deg);

  :after {
    transform-origin: top left;
    ${borderEffect}
  }
`;

export const Title = styled.h1`
  position: absolute;
  left: -1.2rem;
  bottom: -23rem;

  ${({ isEn }) =>
    isEn &&
    css`
      left: -3rem;
      bottom: -25rem;
    `}

  font-size: ${({ theme }) => theme.fonts.size.l};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  white-space: pre-wrap;
  letter-spacing: 0.5px;

  :after {
    position: absolute;
    bottom: 0;
    height: 15rem;
    border-right: 1px solid rgb(112, 112, 112);
    transform-origin: bottom right;
  }

  ${({ theme }) => theme.mq.phone} {
    font-size: ${({ theme }) => theme.fonts.size.m};
    bottom: -19rem;

    :after {
      height: 12.5rem;
    }

    ${({ isEn }) =>
      isEn &&
      css`
        left: -2.5rem;
        bottom: -20.5rem;
      `}
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

  transform-origin: bottom left;
  transform: rotate3d(0, 0, 1, -50deg);

  :after {
    animation-delay: 0.25s;
    ${({ isWritten }) => isWritten && borderEffect}
  }
`;

export const Background = styled.div`
  position: absolute;
  z-index: -3;
  bottom: 0;
  right: 42%;

  width: 80vw;
  height: 40vw;
  border-color: rgb(112, 112, 112);
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

  ${({ theme }) => theme.mq.phone} {
    width: 90vw;
    height: 45vw;
    opacity: 0.8;
  }

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

  transform-origin: right bottom;
  ${growingEffect}
`;

export const Description = styled.div`
  position: relative;
  top: 29%;
  width: 50vw;
  display: flex;
  flex-direction: column;

  & span {
    font-size: ${({ theme }) => theme.fonts.size.s};
    padding-top: 2rem;
  }

  ${({ theme }) => theme.mq.phone} {
    width: 100%;
    bottom: 0;
    margin-top: 32vh;

    & span {
      font-size: ${({ theme }) => theme.fonts.size.xs};
    }
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
