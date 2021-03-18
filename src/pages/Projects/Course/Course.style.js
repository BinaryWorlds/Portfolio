import styled from 'styled-components';
import fadeIn from '../../../animations/fadeIn';
import slideXEffect from '../../../animations/slideXEffect';
import slideYEffect from '../../../animations/slideYEffect';
import { BasicHint } from '../../../hooks/useHint';

import { borderEffect } from './Course.animations';
import Img from '../../../components/Image/Image';

export const Wrapper = styled.div`
  padding: 0 10%;
  height: 100%;
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;

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

  ${fadeIn}
`;

export const Image = styled(Img)`
  width: 75%;
  margin: 15% 0 5vh 3%;

  ${({ theme }) => theme.mq.phone} {
    width: 100%;
    margin-left: 0;
  }

  ${({ theme }) => theme.mq.phoneL} {
    width: 90%;
    margin-top: 0;
  }

  ${({ theme }) => theme.mq.middle} {
    width: 55%;
    margin-top: 0;
  }

  ${slideYEffect};
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 0 0 10% 20%;

  ${({ theme }) => theme.mq.phoneL} {
    margin: 5% 0 5% 20%;
  }

  ${({ theme }) => theme.mq.middle} {
    width: 42%;
    margin: 10% 0 10% 0;
  }

  ${slideXEffect};
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fonts.size.l};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};

  ${({ theme }) => theme.mq.phone} {
    font-size: ${({ theme }) => theme.fonts.size.m};
  }

  ${({ theme }) => theme.mq.huge} {
    font-size: ${({ theme }) => theme.fonts.size.xxl};
  }
`;

export const ButtonMore = styled.div`
  margin-top: 4rem;
  margin-left: 4rem;
  position: relative;

  ${({ theme }) => theme.mq.huge} {
    margin-top: 5rem;
  }
`;

export const Section = styled.div`
  display: flex;
  width: 100%;

  ${({ theme }) => theme.mq.phone} {
    flex-direction: column;
  }
`;

export const VisitButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 27.5%;

  ${({ theme }) => theme.mq.phone} {
    width: unset;
    transform: scale(0.9);
    padding-left: 17vw;
    padding-bottom: 5%;
    margin: 0 auto;
  }

  ${({ theme }) => theme.mq.middle} {
    width: 21.25%;
  }

  ${({ theme }) => theme.mq.huge} {
    transform: scale(1.5);
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 70%;
  position: relative;
  left: -3px;
  overflow: hidden;

  :before,
  :after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transform-origin: center left;
  }

  :before {
    z-index: -1;
    border-left: 6px solid rgb(112, 112, 112);
  }

  :after {
    background: #fff;
    z-index: -2;
  }

  span {
    z-index: -3;
    margin-left: 4rem;
    margin-bottom: 2rem;
    font-size: ${({ theme }) => theme.fonts.size.s};
  }

  ${({ theme }) => theme.mq.phone} {
    margin-left: 17vw;
    max-width: 100%;

    span {
      font-size: ${({ theme }) => theme.fonts.size.xs};
      margin-left: 7%;
    }
  }
  ${({ theme }) => theme.mq.phoneL} {
    margin-bottom: 5%;
  }

  ${({ theme }) => theme.mq.huge} {
    max-width: 50%;
    span {
      font-size: ${({ theme }) => theme.fonts.size.m};
    }
  }

  ${borderEffect};
`;

export const Hint = styled(BasicHint)`
  left: 50%;
  bottom: 0;
  padding: 5%;
  transform: translate(-50%, 100%);
`;
