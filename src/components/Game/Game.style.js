import styled from 'styled-components';
import shakeEffect from '../../animations/shakeEffect';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  user-select: none;
`;

export const StyledButton = styled.button`
  ${({ animate }) => animate && shakeEffect}
  background: transparent;
  position: relative;
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
    top: 10px;
    left: 20px;
    background: ${({ theme }) => theme.colors.blue};
    transition: all 0.4s;
  }

  :hover:before {
    transform: scale(0.5, 0.5) translate(-60px, -40px);
  }
`;
