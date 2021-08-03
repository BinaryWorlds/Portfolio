import styled, { css } from 'styled-components';

export const Hamburger = styled.button`
  z-index: 200;
  margin: 2vh;
  position: relative;
  padding: 1.9rem 1rem;

  ${({ theme }) => theme.mq.md} {
    display: none;
  }
`;

const line = css`
  height: 0.2rem;
  width: 4rem;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Inner = styled.div`
  ${line};
  position: relative;
  background-color: ${({ isOpen, theme }) => (isOpen ? 'transparent' : theme.colors.primary)};
  transition: background-color 0.25s ease-in;

  :before,
  :after {
    position: absolute;
    content: '';
    left: 0;
    ${line};
    transition: transform 0.25s ease-in-out;
  }

  :before {
    transform: translateY(${({ isOpen }) => (isOpen ? '0' : '-1rem')})
      rotate(${({ isOpen }) => (isOpen ? '45deg' : '0')});
  }

  :after {
    transform: translateY(${({ isOpen }) => (isOpen ? '0' : '1rem')})
      rotate(${({ isOpen }) => (isOpen ? '-45deg' : '0')});
  }
`;
