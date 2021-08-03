import styled from 'styled-components';
import { Text } from '../SvgText/SvgText.style';

export const Wrapper = styled.nav`
  z-index: 100;
  display: none;

  ${({ theme }) => theme.mq.md} {
    display: inline;
  }
`;

export const List = styled.ul`
  margin-right: 1rem;
  padding: 0.5rem;
  padding-top: 0;

  display: flex;
  border: 0.1rem solid ${({ theme }) => theme.colors.stroke25};
  border-bottom-left-radius: 5rem;
  border-bottom-right-radius: 5rem;
  border-top: none;

  backdrop-filter: blur(3px);
  background: ${({ theme }) => theme.colors.glass};

  box-shadow: inset 0 -0.4rem 0.4rem ${({ theme }) => theme.colors.shadow15},
    inset -0.4rem 0 0.8rem ${({ theme }) => theme.colors.shadow15},
    inset 0.4rem 0 0.8rem ${({ theme }) => theme.colors.shadow15};
`;

export const Element = styled.li`
  list-style: none;
  text-align: center;
`;

export const MenuButton = styled.button`
  padding: 0.75rem 1rem;
  margin: 0.75rem 1.5rem;

  ${Text} {
    font-family: ${({ theme }) => theme.fontFamily.decoration};
    font-size: ${({ theme }) => theme.fontSize[0].lg};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    letter-spacing: 0.04em;
  }
`;
