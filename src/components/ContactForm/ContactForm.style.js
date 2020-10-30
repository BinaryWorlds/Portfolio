import styled, { css } from 'styled-components';

const commonStyles = css`
  font-size: ${({ theme }) => theme.fonts.size.xs};
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 15px;
  height: 6rem;
  outline: none;
  resize: none;
  margin-top: 2.3rem;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50.6rem;
`;
export const StyledTitle = styled.div`
  font-size: ${({ theme }) => theme.fonts.size.m};
  align-self: center;
`;

export const StyledInput = styled.input`
  ${commonStyles};
  padding-left: 1.8rem;
`;

export const StyledArea = styled.textarea`
  ${commonStyles};
  height: 18rem;
  padding-left: 1.8rem;
  padding-top: 1.8rem;
`;

export const StyledButton = styled.button`
  ${commonStyles};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  cursor: pointer;
  background-color: white;
`;
