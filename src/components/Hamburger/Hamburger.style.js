import styled from 'styled-components';
import { animated } from 'react-spring';

export const Hamburger = styled.button`
  z-index: 200;
  position: fixed;
  top: 0rem;
  right: 0rem;
  width: 6rem;
  height: 5rem;
  margin: 2vh;

  ${({ theme }) => theme.mq.md} {
    display: none;
  }
`;

export const Inner = styled(animated.div)`
  height: 0.2rem;
  width: 4rem;
  background-color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  top: 50%;
  left: 50%;
`;
