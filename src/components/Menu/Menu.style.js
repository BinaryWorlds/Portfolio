import styled, { css } from 'styled-components';
import loadEffect from './Menu.animations';

const heightTrapeze = 60;
const opposite = Math.floor(heightTrapeze / Math.sqrt(3));
const hypotenuse = Math.floor((heightTrapeze / Math.sqrt(3)) * 2);

export const StyledWrapper = styled.nav``;

export const StyledMenu = styled.div`
  z-index: 99;
  position: relative;
  width: 200px;
  height: 0px;
  border-left: ${opposite}px solid transparent;
  border-bottom: ${heightTrapeze}px solid ${({ theme }) => theme.colors.blue};
  clip-path: polygon(
    ${opposite}px 0px,
    215px 0px,
    215px ${heightTrapeze + 15}px,
    -15px ${heightTrapeze + 15}px
  );
  cursor: pointer;
  display: flex;
  justify-content: center;

  button {
    top: 1.4rem;
  }

  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
`;

export const StyledElement = styled.li`
  list-style: none;
  position: relative;
  top: -${hypotenuse}px;
  margin-bottom: 27px;
  width: 192px;
  height: ${hypotenuse}px;
  transform-style: preserve-3d;
  transform-origin: bottom left;
  background: ${({ theme }) => theme.colors.pink};
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${({ active, last }) =>
    active &&
    css`
      :before {
        content: '';
        position: absolute;
        right: 0px;
        bottom: 9px;
        height: ${heightTrapeze}px;
        width: ${last ? 180 : 200 - opposite}px;
        background: ${({ theme }) => theme.colors.blue};
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
      }
    `};

  :after {
    content: '${({ text }) => text}';
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 30px 0 0 95px;
    transform: rotate3d(0, 0, 1, -30deg);
  }

  ${({ isOpen, orderNr }) => isOpen && loadEffect(orderNr)};
  ${({ isOpen }) =>
    !isOpen &&
    css`
      transform: rotate3d(0, 0, 1, 30deg);
    `};
`;

export const StyledMenuButton = styled.button`
  background: transparent;
  cursor: pointer;
  outline: none;
  border: none;
  position: relative;
  right: 10px;
  bottom: 5px;
  height: 70%;
  width: 50%;
  transform: rotate(-30deg) translateZ(1px);
`;
