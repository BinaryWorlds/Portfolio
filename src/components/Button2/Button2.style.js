import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  outline: none;
  box-sizing: border-box;
  height: 50px;
  width: 100px;
  border-radius: 15px;
  border: 1px solid rgba(112, 112, 112, 0.42);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fonts.size.s};
`;
