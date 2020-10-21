import styled from 'styled-components';

export const StyledWrapper = styled.div``;

export const StyledButton = styled.button`
  background: transparent;
  position: absolute;
  top: 20px;
  cursor: pointer;
  outline: none;
  border: 0;
  font-size: ${({ theme }) => theme.fonts.size.s};

  :before {
    content: '';
    position: absolute;
    z-index: -1;
    width: 50%;
    height: 100%;
    background: ${({ theme }) => theme.colors.blue};
    transition: all 0.4s;
  }
  :hover:before {
  }
`;
