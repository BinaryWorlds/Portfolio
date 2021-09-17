import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  width: 100%;
  padding: 5vh 0;

  ${({ theme }) => theme.mq.md} {
    padding: 3vh 0;
  }
`;

export const Para = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize[1].sm};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 150%;

  ${({ theme }) => theme.mq.lg} {
    font-size: ${({ theme }) => theme.fontSize[1].md};
  }
`;

export const Policy = styled.a`
  color: ${({ theme }) => theme.colors.decoration900};
  text-shadow: ${({ theme }) => theme.colors.decoration900} 0 0.025rem 0.025rem;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize[1].sm};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  padding: 2rem 0;

  ${({ theme }) => theme.mq.lg} {
    font-size: ${({ theme }) => theme.fontSize[1].md};
  }
`;
