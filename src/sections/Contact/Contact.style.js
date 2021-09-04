import styled from 'styled-components';
import { header } from '../../ui/header';
import linkComponent from '../../components/Link/Link';

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 6rem;
  max-width: 136rem;
  position: relative;
  display: grid;
  justify-items: center;
  align-self: center;

  ${({ theme }) => theme.mq.md} {
    grid-template-columns: 1fr 40% 1fr 40% 1fr;
    #contactForm {
      grid-column: 2;
    }
  }
`;

export const Title = styled(header)`
  ${({ theme }) => theme.mq.md} {
    grid-column: span 5;
  }
`;

export const Link = styled(linkComponent)`
  display: flex;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize[3].sm};
  margin: 4rem;

  grid-column: span 2;

  svg {
    width: 5.6rem;
  }

  &:first-of-type {
    margin: 2rem;
  }

  ${({ theme }) => theme.mq.sm} {
    margin: 6rem;

    &:first-of-type {
      margin: 2rem;
    }
  }

  ${({ theme }) => theme.mq.lg} {
    svg {
      width: 7rem;
    }
  }
`;

export const Container = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;

  ${({ theme }) => theme.mq.md} {
    grid-column: 4;
  }

  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;

  ${Link}:nth-of-type(4) {
    grid-row: 4;
    grid-column: 1;
  }

  ${Link}:nth-of-type(5) {
    grid-row: 4;
    grid-column: 2;
  }

  ${Link}:first-of-type {
    width: 24rem;
    padding: 0.5rem;
    margin: 7rem 0 5rem 0;

    justify-content: space-around;
    align-items: center;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    font-family: ${({ theme }) => theme.fontFamily.decoration};
    font-size: ${({ theme }) => theme.fontSize[1].sm};
    letter-spacing: 0.04em;
    background: ${({ theme }) => theme.colors.glass};
    border: 0.1rem solid ${({ theme }) => theme.colors.stroke10};
    border-radius: 1.5rem;
    backdrop-filter: blur(0.5rem);

    svg {
      width: 3.5rem;
    }

    ${({ theme }) => theme.mq.lg} {
      font-size: ${({ theme }) => theme.fontSize[1].md};

      width: 30rem;
      padding: 1rem;
    }
  }
`;
