import styled, { css } from 'styled-components';

const textOne = css`
  letter-spacing: 0.04em;
  font-size: ${({ theme }) => theme.fontSize[0].sm};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};

  ${({ theme }) => theme.mq.lg} {
    font-size: ${({ theme }) => theme.fontSize[0].md};
  }
`;

const commonStyles = css`
  width: 100%;
  height: 3.5rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.stroke10};
  border-radius: 1rem;
  background: ${({ theme }) => theme.colors.glass};
  resize: none;
  ${textOne};

  ${({ error }) =>
    error &&
    css`
      border-color: red;
    `}

  ${({ theme }) => theme.mq.lg} {
    height: 4.4rem;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  ${textOne};
  font-family: ${({ theme }) => theme.fontFamily.decoration};

  svg {
    height: 3rem;
    justify-self: center;
    margin-right: 2rem;
  }

  ${({ theme }) => theme.mq.lg} {
    svg {
      height: 4.5rem;
    }
  }
`;

export const Form = styled.form`
  width: 90%;
  border-radius: 1.5rem;
  padding: 3rem 2.5rem;
  display: grid;
  background: ${({ theme }) => theme.colors.glass};
  box-shadow: inset -0.1rem 0 0 ${({ theme }) => theme.colors.shadow10},
    inset 0 -0.1rem 0 ${({ theme }) => theme.colors.shadow10};
  backdrop-filter: blur(2.5rem);

  #captcha {
    display: ${({ show }) => (show ? 'unset' : 'none')};
    position: absolute;
    left: 50%;
    bottom: 3rem;
    transform: translateX(-50%);
  }
`;

export const Label = styled.label`
  margin: 1.5rem 0;
  position: relative;
`;

export const LabelName = styled.span`
  ${({ showLabel }) =>
    !showLabel &&
    css`
      position: absolute !important;
      height: 1px;
      width: 1px;
      overflow: hidden;
      clip: rect(1px 1px 1px 1px);
      clip: rect(1px, 1px, 1px, 1px);
    `}
`;

export const Input = styled.input`
  ${commonStyles};
  padding: 0 1.8rem;
`;

export const Area = styled.textarea`
  ${commonStyles};
  height: 18rem;
  padding: 1.8rem;

  ${({ theme }) => theme.mq.lg} {
    height: 25rem;
  }
`;

export const Error = styled.span`
  z-index: 100;
  color: red;
  position: absolute;
  bottom: 0;
  left: 4rem;
  transform: translateY(100%);
  ${textOne}
`;

export const Button = styled.button`
  ${commonStyles};
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  width: 15.5rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.bg};
  font-family: ${({ theme }) => theme.fontFamily.decoration};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize[1].sm};
  border: none;
  border-radius: 1.5rem;
  justify-self: center;

  ${({ theme }) => theme.mq.lg} {
    font-size: ${({ theme }) => theme.fontSize[1].md};
  }
`;

export const Confirm = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem auto 9rem auto;
  position: relative;
  ${textOne};
`;

export const Checkbox = styled.input`
  width: 1.5rem;
  height: 1.5rem;
  margin: 1rem;
  flex-shrink: 0;
`;
