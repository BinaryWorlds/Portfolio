import styled from 'styled-components';

export const header = styled.h1`
  font-size: ${({ theme }) => theme.fontSize[3].sm};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-family: ${({ theme }) => theme.fontFamily.decoration};
  line-height: 140%;
  letter-spacing: 0.04em;

  ${({ theme }) => theme.mq.lg} {
    font-size: ${({ theme }) => theme.fontSize[3].md};
  }
`;
