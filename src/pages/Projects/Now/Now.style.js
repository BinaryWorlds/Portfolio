import styled, { css } from 'styled-components';
import fadeOut from '../../../animations/fadeOut';
import slideXEffect from '../../../animations/slideXEffect';

export const StyledWrapper = styled.div`
  position: relative;
  overflow: hidden;
  padding: 0 10%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;

  ${({ theme }) => theme.mq.middle} {
    align-items: center;
  }

  ${({ theme: { isUnmounted } }) => (isUnmounted ? slideXEffect : fadeOut)}
`;

export const StyledTitle = styled.h1`
  position: absolute;
  top: 13.5%;
  display: flex;
  justify-content: center;
  font-size: ${({ theme }) => theme.fonts.size.l};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};

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
  height: 84%;
  background-color: ${({ theme }) => theme.colors.orange};
  border: 1px solid rgb(112, 112, 112, 0.5);
`;

export const StyledImageContainer = styled.div`
  width: 80%;
  position: relative;
  padding-bottom: 31.44%;

  :before {
    z-index: -1;
    top: 32%;
    transform: rotate(-45deg);
    transform-origin: top left;
    ${backgroundStyle}
  }

  :after {
    z-index: -2;
    top: -32%;
    transform: rotate(45deg);
    transform-origin: bottom left;
    ${backgroundStyle};
  }

  ${({ theme }) => theme.mq.middle} {
    width: 58%;
    :before,
    :after {
      height: 74%;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 50%;
    :before,
    :after {
      height: 64%;
    }
  }
`;

export const StyledImage = styled.img`
  position: absolute;
  width: 100%;
`;

export const StyledText = styled.div`
  width: 80%;
  max-width: 48rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  & span {
    padding-top: 2rem;
    font-size: ${({ theme }) => theme.fonts.size.s};
  }

  ${({ theme }) => theme.mq.tablet} {
    bottom: 5%;

    span:first-of-type {
      padding-top: 0;
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
