import styled from 'styled-components';
import { animated } from 'react-spring';

import { HashLink } from 'react-router-hash-link';
import { Text } from '../SvgText/SvgText.style';

export const Wrapper = styled.nav`
  ${({ theme }) => theme.mq.md} {
    display: none;
  }
`;

export const Container = styled(animated.div)`
  width: 90vw;
  height: 90vh;
  position: fixed;
  top: 50%;
  right: 0;

  border-radius: 5rem 0 0 5rem;
  background: ${({ theme }) => theme.colors.glass};
  backdrop-filter: blur(0.3rem);
  box-shadow: inset 0 -0.5rem 0.4rem ${({ theme }) => theme.colors.shadow15},
    inset 0 0.5rem 0.4rem ${({ theme }) => theme.colors.shadow15},
    inset 1rem 0 0.4rem ${({ theme }) => theme.colors.shadow15};

  display: grid;
  grid-template-rows: 1fr auto 1fr;
`;

export const Element = styled.li`
  list-style: none;
  text-align: center;
  margin-top: 2.5vh;
`;

export const List = styled.ul`
  grid-row-start: 2;

  ${Element}:first-of-type {
    margin-top: 0;
  }
`;

export const MenuButton = styled(HashLink)`
  ${Text} {
    font-size: ${({ theme }) => theme.fontSize[3].md};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    padding: 1.2vh 0;
    letter-spacing: 0.04em;
  }
  text-decoration: none;
`;

export const CloseButton = styled.button`
  grid-row-start: 3;
  justify-self: center;
  align-self: center;

  svg {
    width: 6rem;
  }
`;
