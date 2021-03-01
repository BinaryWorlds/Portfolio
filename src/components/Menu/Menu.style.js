import styled, { css } from 'styled-components';
import loadEffect from './Menu.animations';

const heightTrapeze = 60;
const opposite = Math.floor(heightTrapeze / Math.sqrt(3));
const hypotenuse = Math.floor((heightTrapeze / Math.sqrt(3)) * 2);

export const Wrapper = styled.nav``;

export const Menu = styled.div`
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

export const Element = styled.li`
  list-style: none;
  position: relative;
  top: -${hypotenuse}px;
  left: 0;
  margin-bottom: 27px;
  width: 192px;
  height: ${hypotenuse}px;
  transform-style: preserve-3d;
  transform-origin: bottom left;
  background: ${({ theme }) => theme.colors.pink};
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  z-index: 98;

  ${({ active, last }) =>
    active &&
    css`
      :before {
        z-index: -1;

        content: '';
        position: absolute;
        right: 0;
        top: 0;
        height: ${heightTrapeze}px;
        width: ${last ? 180 : 200 - opposite}px;
        background: ${({ theme }) => theme.colors.blue};
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
      }
    `};

  :after {
    content: '${({ text }) => text}';
    z-index: 97;

    position: absolute;
    left: 50%;
    bottom: 35%;
    transform: rotate3d(0, 0, 1, -30deg);
  }

  ${({ isOpen, orderNr }) => isOpen && loadEffect(orderNr)};
  ${({ isOpen }) =>
    !isOpen &&
    css`
      transform: rotate3d(0, 0, 1, 30deg);
    `};
`;

export const MenuButton = styled.button`
  background: transparent;
  z-index: 100;
  cursor: pointer;
  outline: none;
  border: none;
  position: relative;
  left: 40%;
  top: 20%;
  height: 60%;
  width: 50%;
  transform: rotate(-30deg) translateZ(10px);
`;
