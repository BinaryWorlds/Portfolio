import styled, { css } from 'styled-components';

export const StyledWrapper = styled.div``;

export const StyledButton = styled.button`
  position: relative;
  background: transparent;
  cursor: pointer;
  outline: none;
  border: 0;
  font-size: ${({ theme }) => theme.fonts.size.s};

  :before {
    content: '';
    position: absolute;
    left: -5%;
    z-index: -1;
    width: 55%;
    height: 100%;
    background: ${({ theme }) => theme.colors.blue};
    ${({ isPl }) =>
      isPl &&
      css`
        transform: translateX(105%);
      `};
    transition: all 0.4s;
  }
  :hover:before {
  }
`;
