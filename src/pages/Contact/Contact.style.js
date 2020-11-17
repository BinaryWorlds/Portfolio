import styled, { css } from 'styled-components';
import fadeOut from '../../animations/fadeOut';
import fadeIn from '../../animations/fadeIn';

import { spin3dEffect, formEffect } from './Contact.animations';

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  form {
    margin-top: auto;
  }

  ${({ theme: { isUnmounted } }) =>
    isUnmounted ? fadeIn && formEffect : fadeOut};
`;

export const StyledSection = styled.div`
  margin-right: 12rem;
  height: 52rem;
  display: grid;
  grid-column: 1;
  position: relative;

  span {
    margin-top: 2rem;
    font-size: ${({ theme }) => theme.fonts.size.m};
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
    top: calc(15.55% + 1.5rem);
    left: 30%;
    transform: rotate(-29deg);
  }

  :after {
    ${eyeStyle}
    top: 15.55%;
    left: calc(30% + 9.7rem);
    transform: rotate(7deg);
  }
`;

export const StyledButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  a {
    padding: 0.75rem 2rem;
  }
`;
