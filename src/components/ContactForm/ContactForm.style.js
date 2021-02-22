import styled, { css } from 'styled-components';
import { StyledHint as Hint } from '../../hooks/useHint';

const commonStyles = css`
  font-size: ${({ theme }) => theme.fonts.size.xs};
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 15px;
  height: 6rem;
  outline: none;
  resize: none;
  margin-top: 2.3rem;
  width: 100%;

  ${({ error }) =>
    error &&
    css`
      border-color: red;
    `}
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50.6rem;
  position: relative;

  #captcha {
    display: ${({ show }) => (show ? 'unset' : 'none')};
    padding-top: 2rem;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 1rem);
  }
  ${({ theme }) => theme.mq.phone} {
    margin-bottom: 7rem;
  }
`;

export const StyledTitle = styled.div`
  font-size: ${({ theme }) => theme.fonts.size.s};
  align-self: center;

  span {
    font-size: ${({ theme }) => theme.fonts.size.s};
    border-bottom: 2px solid ${({ theme }) => theme.colors.text};
  }

  ${({ theme }) => theme.mq.middle} {
    &,
    span {
      font-size: ${({ theme }) => theme.fonts.size.m};
    }
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  position: relative;
  top: 0;
  left: 0;
  ${({ showLabel }) =>
    !showLabel &&
    css`
      #label {
        position: absolute !important;
        height: 1px;
        width: 1px;
        overflow: hidden;
        clip: rect(1px 1px 1px 1px);
        clip: rect(1px, 1px, 1px, 1px);
      }
    `}
`;

export const StyledInput = styled.input`
  ${commonStyles};
  padding-left: 1.8rem;
`;

export const StyledError = styled.span`
  color: red;
  position: absolute;
  bottom: 0;
  left: 22%;
  transform: translateY(100%);
  ${({ theme }) => theme.mq.phone} {
    left: 10%;
  }
`;

export const StyledArea = styled.textarea`
  ${commonStyles};
  height: 18rem;
  padding-left: 1.8rem;
  padding-top: 1.8rem;
  overflow: auto;
`;

export const StyledButton = styled.button`
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  ${commonStyles};
  height: 5.6rem;
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  cursor: pointer;
  background-color: white;
  transition: all 0.15s linear;

  :hover,
  :focus-visible {
    background-color: black;
    color: white;
    ::selection {
      background-color: transparent;
      color: white;
    }
  }
`;

export const StyledConfirm = styled.label`
  width: 100%;
  position: absolute;
  bottom: -6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledCheckbox = styled.input`
  width: 2.5rem;
  height: 2.5rem;
  margin: 1rem;
`;

export const StyledHint = styled(Hint)`
  left: 50%;
  bottom: 0;
  padding: 4%;
  transform: translate(-50%, -100%);
`;
