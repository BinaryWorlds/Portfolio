import styled, { css } from 'styled-components';
import { HashLink } from 'react-router-hash-link';
import img from '../../components/Image/Image';
import { header } from '../../ui/header';

import linkComponent from '../../components/Link/Link';
import { para } from '../../ui/para';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 75rem;
  align-self: center;
  display: grid;
  justify-items: center;
  grid-gap: 3rem;
  margin: 3rem 0;

  ${({ theme }) => theme.mq.md} {
    margin: 7rem 0;
  }
`;

export const Image = styled(img)`
  width: 100%;
  img {
    border-radius: 5rem 5rem 0 0;
  }
`;

export const ButtonsContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;

  ${({ theme }) => theme.mq.md} {
    width: 70%;
  }
`;

export const Link = styled(linkComponent)`
  width: 13rem;
  height: 5rem;
  border-radius: 6rem;
  font-size: ${({ theme }) => theme.fontSize[2].sm};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-family: ${({ theme }) => theme.fontFamily.decoration};
  line-height: 140%;
  letter-spacing: 0.04em;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.mq.lg} {
    width: 16.25rem;
    height: 6.25rem;
  }

  ${({ live }) =>
    live &&
    css`
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.bg};
      text-shadow: ${({ theme }) => theme.colors.bg} 0px 0.25px 0.25px;
    `}

  ${({ github }) =>
    github &&
    css`
      border: 0.2rem solid ${({ theme }) => theme.colors.primary};
      border-radius: 6rem;
    `}
`;

export const CloseButton = styled(HashLink)`
  justify-self: center;
  margin: 3rem 0;

  svg {
    width: 6rem;
  }

  ${({ theme }) => theme.mq.sm} {
    margin: 6rem 0;
  }
`;

export const Container = styled.div`
  display: grid;
  border-radius: 0 0 5rem 5rem;
  background: ${({ theme }) => theme.colors.glass};
  border: 0.1rem solid ${({ theme }) => theme.colors.stroke25};
  backdrop-filter: blur(0.5rem);

  ${CloseButton} {
    margin: 6rem;
  }
`;

export const Title = styled(header)`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  margin: 3rem 0;
`;

export const Para = styled(para)`
  width: 80%;
  justify-self: center;

  ${({ desc }) =>
    desc &&
    css`
      margin: 0.5rem 0;
    `}

  ${({ techs }) =>
    techs &&
    css`
      text-align: center;
    `}

    ${({ first }) =>
    first &&
    css`
      margin-top: 5rem;
      margin-bottom: 2rem;
      list-style: none;
    `}
`;

export const List = styled.ul`
  display: grid;
  grid-gap: 0.5rem;
  ${Para} {
    margin-left: 15%;
  }
  & :first-child {
    margin-left: 0;
  }
`;
