import styled, { css } from 'styled-components';
import {
  timeInEffect,
  timeOutEffect,
  lineInEffect,
  lineOutEffect,
  showEffect,
  hideEffect,
} from './Timeline.animations';

export const StyledWrapper = styled.div`
  position: fixed;
  z-index: 100;
  display: flex;
  flex-direction: column;
  ${({ showTimeline }) => (showTimeline ? showEffect : hideEffect)}
`;

export const StyledLine = styled.div`
  position: relative;
  height: 4rem;
  width: 12rem;
  display: flex;
  align-items: center;
  overflow: hidden;

  :before {
    position: absolute;
    content: '';
    width: 2rem;
    height: 0.2rem;
    background-color: ${({ theme }) => theme.colors.text};

    ${({ theme: { isUnmounted }, active }) => {
      if (active && !isUnmounted) return lineOutEffect;
      if (active && isUnmounted) return lineInEffect;
      return null;
    }}
  }

  :after {
    position: absolute;
    ${({ active, text }) =>
      active &&
      css`
        content: '${text}';
      `}
    ${({ active }) => active && timeInEffect}
    ${({ theme: { isUnmounted } }) => !isUnmounted && timeOutEffect}

    padding-left: 5.3rem;
    color: ${({ theme }) => theme.colors.red};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
  }
`;
