import styled from 'styled-components';

export const Hamburger = styled.button`
  position: relative;
  padding: 15px;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
`;

export const InnerHamburger = styled.div`
  position: relative;
  width: 38px;
  height: 1px;
  background-color: ${({ isOpen }) => (isOpen ? 'transparent' : 'black')};
  transition: background-color 0.25s ease-in;

  :before,
  :after {
    position: absolute;
    content: '';
    left: 0;
    width: 38px;
    height: 1px;
    background-color: black;
    transition: transform 0.25s ease-in-out;
  }

  :before {
    top: -10px;
    transform: translateY(${({ isOpen }) => (isOpen ? '10px' : '0px')})
      rotate(${({ isOpen }) => (isOpen ? '45deg' : '0')});
  }

  :after {
    top: 10px;
    transform: translateY(${({ isOpen }) => (isOpen ? '-10px' : '0px')})
      rotate(${({ isOpen }) => (isOpen ? '-45deg' : '0')});
  }
`;
