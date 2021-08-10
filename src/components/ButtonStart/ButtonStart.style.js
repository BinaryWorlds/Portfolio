import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 14.9rem;
  height: 5.2rem;
  padding: 0.2rem;

  border: 0.2rem solid ${({ theme }) => theme.colors.buttonB};
  border-radius: 5rem;

  ${({ theme }) => theme.mq.lg} {
    width: 22.2rem;
    height: 7rem;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-family: ${({ theme }) => theme.fontFamily.decoration};
  font-size: 1.8rem;
  letter-spacing: 0.04em;

  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.buttonA} 28%,
    ${({ theme }) => theme.colors.bg} 100%
  );

  ${({ theme }) => theme.mq.lg} {
    font-size: 2.1rem;
  }
`;
