import styled from 'styled-components';

export const StyledButton = styled.a`
  background-color: transparent;
  cursor: pointer;
  text-decoration: inherit;
  box-sizing: border-box;
  height: 5rem;
  width: 10rem;
  border-radius: 1.5rem;
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

  :hover:before,
  :focus-visible:before {
    left: 0%;
    top: 0%;
    width: 100%;
    height: 100%;
    border: 3px solid ${({ theme }) => theme.colors.text};
    border-radius: 1.5rem;
    opacity: 0;
    transition: 0.75s ease;
    transform: all;
  }

  ${({ theme }) => theme.mq.huge} {
    transform: scale(1.5);
  }
`;
