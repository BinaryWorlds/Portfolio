import styled from 'styled-components';

export const header = styled.h1`
  text-align: center;
  margin: 5rem 0;

  font-size: ${({ theme }) => theme.fontSize[3].sm};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-family: ${({ theme }) => theme.fontFamily.decoration};
  line-height: 140%;
  letter-spacing: 0.04em;

  ${({ theme }) => theme.mq.md} {
    margin: 10rem 0;
  }

  ${({ theme }) => theme.mq.lg} {
    font-size: ${({ theme }) => theme.fontSize[3].md};
  }
`;
