import styled, { css } from 'styled-components';
import fadeOut from '../../animations/fadeOut';

import { spin3dEffect, formEffect } from './Contact.animations';

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  form {
    margin-top: auto;
    width: 45%;
  }

  ${({ theme }) => theme.mq.phone} {
    padding: 5%;
    margin: 10% 0;
    flex-direction: column;
    align-items: center;
    overflow: hidden;

    form {
      width: 95%;
      max-width: 35rem;

      div {
        display: none;
      }
    }
  }

  ${({ theme }) => theme.mq.middle} {
    form {
      width: auto;
    }
  }

  ${({ theme }) => theme.mq.huge} {
    transform: scale(1.5);
  }

  ${({ theme: { isUnmounted } }) => (isUnmounted ? formEffect : fadeOut)};
`;

export const StyledSection = styled.div`
  margin-right: 2rem;
  height: 52rem;
  display: grid;
  grid-column: 1;
  position: relative;

  span {
    margin-top: 2rem;
    font-size: ${({ theme }) => theme.fonts.size.s};
    text-align: center;
    white-space: pre-wrap;
  }

  span:first-of-type {
    margin-top: 0;
    margin-bottom: 2rem;
    font-size: ${({ theme }) => theme.fonts.size.xl};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
  }

  ${({ theme: { isUnmounted } }) => isUnmounted && spin3dEffect};

  ${({ theme }) => theme.mq.phone} {
    margin: 0;
    height: unset;

    span {
      font-size: ${({ theme }) => theme.fonts.size.xs};
      margin-bottom: 2rem;
    }

    span:first-of-type {
      font-size: ${({ theme }) => theme.fonts.size.l};
    }
  }

  ${({ theme }) => theme.mq.middle} {
    margin-right: 12rem;

    span {
      font-size: ${({ theme }) => theme.fonts.size.m};
    }

    span:first-of-type {
      font-size: ${({ theme }) => theme.fonts.size.xl};
    }
  }
`;

const eyeStyle = css`
  z-index: -1;
  content: '';
  position: absolute;
  background-color: white;
  width: 7.3rem;
  height: 3.1rem;
  border-radius: 50%;
`;

export const StyledBackground = styled.div`
  z-index: -2;
  position: absolute;
  top: -8%;
  left: 50%;
  background-color: ${({ theme }) => theme.colors.pink};
  width: 100%;
  height: 116%;

  :before {
    ${eyeStyle}
    top: calc(10% + 1.5rem);
    left: 30%;
    transform: rotate(-29deg);
  }

  :after {
    ${eyeStyle}
    top: 10%;
    left: calc(30% + 9.7rem);
    transform: rotate(7deg);
  }
  ${({ theme }) => theme.mq.phone} {
    height: 300%;
    left: -50%;
  }

  ${({ theme }) => theme.mq.middle} {
    :before {
      top: calc(15.55% + 1.5rem);
    }

    :after {
      top: 15.55%;
    }
  }
`;

export const StyledButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  a {
    margin: 0.75rem 2rem;
  }
`;
