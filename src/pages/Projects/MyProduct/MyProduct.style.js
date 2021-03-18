import styled, { css } from 'styled-components';
import Img from '../../../components/Image/Image';

import {
  triangleEffect,
  borderEffect,
  fadeInOrderEffect,
} from './MyProduct.animations';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 10%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.mq.phone} {
    padding: 5%;
    margin: 10% 0;
    overflow: hidden;
  }

  ${({ theme }) => theme.mq.huge} {
    transform: scale(1.5);
  }
`;

export const Wrapper2 = styled.div`
  display: flex;
  position: relative;

  justify-content: center;
  width: 100%;
  flex-wrap: wrap;

  ${({ theme }) => theme.mq.middle} {
    justify-content: space-between;
    width: calc(48% + 45rem);
    flex-wrap: nowrap;
  }

  ${({ theme }) => theme.mq.huge} {
    width: 1187px;
  }
`;

export const Border = styled.svg`
  position: absolute;

  ${({ theme }) => theme.mq.middle} {
    z-index: -6;
    bottom: 0;
    right: 24%;
    width: calc(76% - 20.5rem);
    height: calc(100% - 1.8rem);
    fill: transparent;

    rect {
      width: 100%;
      height: 100%;
      stroke: rgb(112, 112, 112);
      stroke-width: 12;
      stroke-dasharray: 320%;

      ${borderEffect};
    }
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  position: relative;

  a {
    transform: scale(0.9);
    margin: 1rem 0;
    ${fadeInOrderEffect(7.5)}
  }

  :before {
    content: '';
    z-index: -3;
    position: absolute;
    left: 0;
    height: 90%;
    width: 45rem;
    background-color: white;
  }

  ${({ theme }) => theme.mq.phone} {
    width: 85%;
  }

  ${({ theme }) => theme.mq.middle} {
    width: 41rem;

    a {
      margin: 8rem 0;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    a {
      margin: auto 0;
    }
  }
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fonts.size.l};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  margin-bottom: 4rem;

  ${({ theme }) => theme.mq.phone} {
    font-size: ${({ theme }) => theme.fonts.size.m};
    text-align: center;
    margin-top: 4rem;
  }

  ${fadeInOrderEffect(1.5)}
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  position: relative;
  max-width: 100%;

  :before,
  :after {
    content: '';
    position: absolute;
    bottom: -9rem;
    left: -3.5rem;
  }

  :before {
    z-index: -1;
    border-right: 64rem solid transparent;
    border-bottom: 64rem solid ${({ theme }) => theme.colors.sand};
  }

  :after {
    z-index: -2;
    width: 63.9rem;
    height: 63.9rem;
    border-left: 1px solid ${({ theme }) => theme.colors.text};
    border-bottom: 1px solid ${({ theme }) => theme.colors.text};
  }

  span {
    font-size: ${({ theme }) => theme.fonts.size.s};
    margin-bottom: 2rem;
  }

  ${({ theme }) => theme.mq.phone} {
    padding: 0;

    :before,
    :after {
      bottom: -9rem;
      left: -10%;
    }

    span {
      font-size: ${({ theme }) => theme.fonts.size.xs};
    }
  }

  ${({ theme }) => theme.mq.middle} {
    :before,
    :after {
      bottom: -3.5rem;
      left: -3.5rem;
    }
  }

  ${({ children }) =>
    children.map(
      (item, index) => css`
        span:nth-of-type(${index + 1}) {
          ${fadeInOrderEffect(index + 2)}
        }
      `,
    )}

  ${triangleEffect};
`;

export const Image = styled(Img)`
  top: 7rem;
  width: 80%;
  background-color: white;
  margin: auto 0;

  ${({ theme }) => theme.mq.phone} {
    width: 100%;
    top: 0;
    margin-top: 7rem;
  }

  ${({ theme }) => theme.mq.phoneL} {
    width: 90%;
  }

  ${({ theme }) => theme.mq.middle} {
    top: 0;
    width: 48%;
  }

  ${({ theme }) => theme.mq.desktop} {
    margin: 10% 0;
  }

  ${({ theme }) => theme.mq.hd} {
    margin: 10% 0 4.5% 0;
  }

  img {
    ${fadeInOrderEffect(3)}
  }
`;
