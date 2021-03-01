import styled from 'styled-components';
import Image from '../Image/Image';
import { visibleIn, visibleOut } from '../../animations/visible';

export const Wrapper = styled.nav``;

export const Hamburger = styled.div`
  z-index: 100;
  position: fixed;
  top: 5%;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > :not(:nth-child(3)) {
    ${({ isOpen }) => (isOpen ? visibleIn : visibleOut)};
  }

  & :nth-child(2) {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;

    :before {
      background-color: white;
    }
  }

  & :nth-child(3):before {
    z-index: -1;
    position: absolute;
    left: 20%;
    top: 30%;
    content: ${({ isOpen }) => (!isOpen ? `''` : '')};
    width: 60%;
    height: 40%;
    background-color: ${({ theme }) => theme.colors.blue};
  }
`;

export const Logo = styled(Image)`
  width: 15%;
  margin-left: 5%;
`;

export const Menu = styled.div`
  z-index: 98;
  position: fixed;
  top: 0px;
  left: 0px;
  overflow-y: hidden;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.blueStrong};

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ isOpen }) => (isOpen ? visibleIn : visibleOut)};
`;

export const Element = styled.li`
  list-style: none;
  text-align: center;
  margin: 1vh 0;
`;

export const MenuButton = styled.button`
  background: transparent;
  cursor: pointer;
  outline: none;
  border: none;
  font-size: ${({ theme }) => theme.fonts.size.m};
  color: black;
  padding: 1.2vh 0;
  width: 100%;
`;
