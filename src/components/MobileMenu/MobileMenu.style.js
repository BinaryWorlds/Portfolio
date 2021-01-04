import styled, { css } from 'styled-components';
import Image from '../Image/Image';

const fadeIn = css`
  visibility: visible;
  opacity: 1;
  transition: visibility 0s linear 0s, opacity 500ms;
`;
const fadeOut = css`
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s linear 500ms, opacity 500ms;
`;

export const StyledWrapper = styled.nav``;

export const StyledHamburger = styled.div`
  z-index: 100;
  position: fixed;
  top: 5%;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > :not(:nth-child(3)) {
    ${({ isOpen }) => (isOpen ? fadeIn : fadeOut)};
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

export const StyledLogo = styled(Image)`
  width: 15%;
  margin-left: 5%;
`;

export const StyledMenu = styled.div`
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

  ${({ isOpen }) => (isOpen ? fadeIn : fadeOut)};
`;

export const StyledElement = styled.li`
  list-style: none;
  text-align: center;
  margin: 1vh 0;
`;

export const StyledMenuButton = styled.button`
  background: transparent;
  cursor: pointer;
  outline: none;
  border: none;
  font-size: ${({ theme }) => theme.fonts.size.m};
  color: black;
  padding: 1.2vh 0;
  width: 100%;
`;
