import styled, { css } from 'styled-components';

export const Info = styled.div`
  z-index: 9999;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  align-items: center;
  padding: 1.5rem;
  line-height: 175%;
  border: none;
  background: ${({ theme }) => theme.colors.bg};
  transform: translateY(100%);
  transition: all 0.75s ease-in-out;
  font-size: ${({ theme }) => theme.fontSize[1].sm};

  ${({ theme }) => theme.mq.lg} {
    font-size: ${({ theme }) => theme.fontSize[1].md};
  }

  p {
    width: 100%;
    font-size: inherit;
  }

  ${({ show }) =>
    show &&
    css`
      border-top: 0.2rem solid ${({ theme }) => theme.colors.decoration900};
      transform: translateY(0);
      box-shadow: 0 0.2rem 1rem ${({ theme }) => theme.colors.decoration900};
    `}

  ${({ theme }) => theme.mq.lg} {
    padding: 2rem 3rem;
  }
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.primary};
  width: 22rem;
  padding: 1.5rem;
  margin: 1.5rem;
  border: 0.3rem solid ${({ theme }) => theme.colors.decoration900};
  border-radius: 10rem;
  box-shadow: 0 0.1rem 1rem ${({ theme }) => theme.colors.decoration900};
  order: 2;
  font-size: inherit;
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  ${({ border }) =>
    border &&
    css`
      border: none;
      ${({ theme }) => theme.mq.sm} {
        order: 1;
      }
    `}

  ${({ theme }) => theme.mq.lg} {
    width: 26rem;
    margin: 2.5rem;
  }
`;

export const Policy = styled.a`
  color: ${({ theme }) => theme.colors.decoration900};
  text-shadow: ${({ theme }) => theme.colors.decoration900} 0 0.025rem 0.025rem;
  text-decoration: none;
  padding: 0.75rem 0;
  font-size: inherit;
`;
