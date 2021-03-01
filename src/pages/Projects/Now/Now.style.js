import styled, { css } from 'styled-components';
import slideXEffect from '../../../animations/slideXEffect';
import Img from '../../../components/Image/Image';

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  padding: 0 10%;
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.mq.phone} {
    padding: 5%;
    margin: 10% 0;
  }

  ${slideXEffect}
`;

export const Title = styled.h1`
  position: relative;
  width: 100%;
  top: 6%;
  left: 0;

  display: flex;
  justify-content: center;
  font-size: ${({ theme }) => theme.fonts.size.l};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};

  ${({ theme }) => theme.mq.phone} {
    font-size: ${({ theme }) => theme.fonts.size.m};
    text-align: center;
  }

  ${({ theme }) => theme.mq.middle} {
    position: absolute;
    top: 13.5%;
  }

  ${({ theme }) => theme.mq.desktop} {
    top: 12.5%;
  }

  ${({ theme }) => theme.mq.huge} {
    font-size: ${({ theme }) => theme.fonts.size.xxl};
  }
`;

const backgroundStyle = css`
  content: '';
  position: absolute;
  left: 0;
  width: 125vh;
  height: 50%;
  background-color: ${({ theme }) => theme.colors.orange};
  border: 1px solid rgba(112, 112, 112, 0.5);
`;

export const Image = styled(Img)`
  width: 80%;

  :before {
    z-index: -1;
    top: 25%;
    ${backgroundStyle}
    transform-origin: top left;
    transform: rotate(-45deg);
  }

  :after {
    z-index: -2;
    top: -25%;
    ${backgroundStyle};
    transform-origin: bottom left;
    transform: rotate(45deg);
  }

  ${({ theme }) => theme.mq.phone} {
    width: 100%;
    margin: 10% 0;
  }

  ${({ theme }) => theme.mq.middle} {
    width: 58%;
    margin-top: 10%;

    :before {
      height: 55%;
      top: 27.5%;
    }

    :after {
      height: 55%;
      top: -27.5%;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 50%;
    margin-top: 5.25%;
  }
`;

export const Text = styled.div`
  width: 80%;
  max-width: 48rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  bottom: 5%;

  & span {
    padding-top: 2rem;
    font-size: ${({ theme }) => theme.fonts.size.s};
  }

  span:first-of-type {
    padding-top: 0;
  }

  ${({ theme }) => theme.mq.phone} {
    width: 100%;

    & span {
      font-size: ${({ theme }) => theme.fonts.size.xs};
    }
  }

  ${({ theme }) => theme.mq.middle} {
    width: 40%;
    bottom: 0;

    & span {
      padding-left: 20%;
    }

    span:first-of-type {
      position: relative;
      left: -15%;
      padding-top: 4rem;
      padding-left: 5%;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    left: 2%;

    & span {
      padding-left: 15%;
    }

    span:first-of-type {
      padding: 0;
    }
  }

  ${({ theme }) => theme.mq.huge} {
    & span {
      font-size: ${({ theme }) => theme.fonts.size.m};
    }
  }
`;
