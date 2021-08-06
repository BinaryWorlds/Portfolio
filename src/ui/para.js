import styled from 'styled-components';

export const para = styled.p`
  font-size: ${({ theme }) => theme.fontSize[2].sm};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-family: ${({ theme }) => theme.fontFamily.default};
  line-height: 140%;
  letter-spacing: 0.04em;

  ${({ theme }) => theme.mq.lg} {
    font-size: ${({ theme }) => theme.fontSize[2].md};
  }
`;
