import styled from 'styled-components';
import fadeOut from '../../../animations/fadeOut';
import fadeIn from '../../../animations/fadeIn';
import slideXEffect from '../../../animations/slideXEffect';
import slideYEffect from '../../../animations/slideYEffect';

import { borderEffect } from './Course.animations';
import Image from '../../../components/Image/Image';

export const StyledWrapper = styled.div`
  padding: 0 10%;
  height: 100%;
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  ${({ theme: { isUnmounted } }) => (isUnmounted ? fadeIn : fadeOut)};

  :before,
  :after {
    z-index: -1;
    content: '';
    position: absolute;
  }

  :before {
    top: 0;
    left: 10%;
    height: 100%;
    width: 22%;
    border: 1px solid rgba(112, 112, 112, 0.5);
    background-color: ${({ theme }) => theme.colors.orange};
  }

  :after {
    bottom: 0;
    right: 0;
    width: 0;
    height: 0;
    border-left: 17vw solid transparent;
    border-bottom: 17vw solid rgba(0, 0, 0, 0.5);
  }

  ${({ theme }) => theme.mq.phone} {
    padding: 5%;
    margin: 10% 0;

    :before {
      left: 0%;
    }
  }

  ${({ theme }) => theme.mq.middle} {
    :before {
      width: 17%;
    }

    :after {
      border-width: 11.5vw;
    }
  }
`;

export const StyledImage = styled(Image)`
  width: 75%;
  margin: 15% 0 5vh 3%;

  ${({ theme }) => theme.mq.phone} {
    width: 100%;
    margin-left: 0;
  }

  ${({ theme }) => theme.mq.middle} {
    width: 55%;
    margin-top: 0;
  }

  img {
    ${({ theme: { isUnmounted } }) => isUnmounted && slideYEffect};
  }
`;

export const StyledTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 0 0 10% 20%;

  ${({ theme }) => theme.mq.middle} {
    width: 42%;
    margin: 10% 0 10% 0;
  }
`;

export const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.fonts.size.l};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};

  ${({ theme }) => theme.mq.phone} {
    font-size: ${({ theme }) => theme.fonts.size.m};
  }

  ${({ theme }) => theme.mq.huge} {
    font-size: ${({ theme }) => theme.fonts.size.xxl};
  }

  ${({ theme: { isUnmounted } }) => isUnmounted && slideXEffect};
`;

export const StyledButtonMore = styled.div`
  margin-top: 4rem;
  margin-left: 4rem;

  ${({ theme }) => theme.mq.huge} {
    margin-top: 5rem;
  }

  ${({ theme: { isUnmounted } }) => isUnmounted && slideXEffect};
`;

export const StyledSection = styled.div`
  display: flex;

  ${({ theme }) => theme.mq.phone} {
    flex-direction: column;
  }
`;

export const StyledVisitButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22vw;

  ${({ theme }) => theme.mq.phone} {
    width: unset;
    transform: scale(0.9);
    padding-left: 17vw;
    padding-bottom: 5%;
    margin: 0 auto;
  }

  ${({ theme }) => theme.mq.middle} {
    width: 17vw;
  }

  ${({ theme }) => theme.mq.huge} {
    transform: scale(1.5);
  }
`;

export const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 70%;
  position: relative;
  left: -3px;
  ${({ theme: { isUnmounted } }) => isUnmounted && borderEffect};
  overflow: hidden;

  :before,
  :after {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    transform-origin: center left;
  }

  :before {
    z-index: -1;
    border-left: 6px solid rgb(112, 112, 112);
  }

  :after {
    z-index: -2;
  }

  span {
    z-index: -3;
    margin-left: 4rem;
    margin-bottom: 2rem;
    font-size: ${({ theme }) => theme.fonts.size.s};
  }

  span :last-of-type {
    margin-bottom: 0;
  }

  ${({ theme }) => theme.mq.phone} {
    margin-left: 17vw;
    max-width: 100%;

    span {
      font-size: ${({ theme }) => theme.fonts.size.xs};
      margin-left: 7%;
    }
  }

  ${({ theme }) => theme.mq.huge} {
    max-width: 50%;
    span {
      font-size: ${({ theme }) => theme.fonts.size.m};
    }
  }
`;
