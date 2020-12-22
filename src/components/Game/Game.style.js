import styled from 'styled-components';
import shakeEffect from '../../animations/shakeEffect';

export const StyledWrapper = styled.div`
  z-index: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  user-select: none;
  margin: auto 0;
`;

export const StyledButton = styled.button`
  ${({ animate }) => animate && shakeEffect(1)}
  background: transparent;
  z-index: 2;
  position: absolute;
  top: 0;
  right: 10%;
  cursor: pointer;
  outline: none;
  border: 0;
  font-size: ${({ theme }) => theme.fonts.size.s};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  margin-bottom: 4vh;

  :before {
    transform-origin: top left;
    content: '';
    z-index: -1;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 40%;
    left: 33%;
    background: ${({ theme }) => theme.colors.blue};
    transition: all 0.4s;
  }

  :hover:before,
  :focus-visible:before {
    transform: scale(0.5) translate(-60px, -40px);
  }

  ${({ theme }) => theme.mq.middle} {
    position: relative;
    right: 0;
  }

  ${({ theme }) => theme.mq.huge} {
    font-size: ${({ theme }) => theme.fonts.size.l};
  }
`;
