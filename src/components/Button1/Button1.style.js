import styled from 'styled-components';
import shakeEffect from '../../animations/shakeEffect';

const black = '#282936';
const transitionRules = 'transition: all 0.45s cubic-bezier(0.65, 0, .076, 1)';

export const StyledButton = styled.button`
  ${({ animate }) => animate && shakeEffect()};

  ${({ theme }) => theme.mq.huge} {
    transform: scale(1.5);
    ${({ animate }) => animate && shakeEffect(1.5)};
  }

  position: relative;
  display: inline-block;
  background: transparent;
  cursor: pointer;
  outline: none;
  border: 0;
  width: 20rem;
  height: auto;

  :hover,
  :focus-visible {
    .button1-circle {
      width: 100%;
    }

    .button1-icon {
      background: white;
      transform: translate(1.6rem, 0);
    }

    .button1-text {
      color: white;
    }
  }
`;

export const StyledCircle = styled.span`
  ${transitionRules};
  position: relative;
  display: block;
  width: 4.8rem;
  height: 4.8rem;
  background: ${black};
  border-radius: 2.4rem;
`;

export const StyledIcon = styled.span`
  ${transitionRules};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 1rem;
  width: 1.8rem;
  height: 0.2rem;
  background: none;
  margin: auto;

  &::before {
    position: absolute;
    content: '';
    top: -0.4rem;
    right: 0.1rem;
    width: 1rem;
    height: 1rem;
    border-top: 0.2rem solid #fff;
    border-right: 0.2rem solid #fff;
    transform: rotate(45deg);
  }
`;

export const StyledText = styled.span`
  ${transitionRules};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1.2rem 0;
  margin: 0 0 0 3rem;
  color: ${black};
  font-size: ${({ theme }) => theme.fonts.size.s};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
`;
