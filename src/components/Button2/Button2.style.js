import styled from 'styled-components';

export const StyledButton = styled.a`
  background-color: transparent;
  cursor: pointer;
  text-decoration: inherit;
  box-sizing: border-box;
  height: 50px;
  width: 100px;
  border-radius: 15px;
  border: 1px solid rgba(112, 112, 112, 0.42);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fonts.size.s};
  position: relative;

  :before {
    z-index: 1;
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 0;
    height: 0;
  }

  :hover:before {
    left: 0%;
    top: 0%;
    width: 100%;
    height: 100%;
    border: 3px solid ${({ theme }) => theme.colors.text};
    border-radius: 15px;
    opacity: 0;
    transition: 0.75s ease;
    transform: all;
  }
`;
