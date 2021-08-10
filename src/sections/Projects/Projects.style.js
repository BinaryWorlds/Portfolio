import styled from 'styled-components';
import { header } from '../../ui/header';
import img from '../../components/Image/Image';
import { wrapper1 } from '../../ui/glass';

export const Wrapper = styled.div`
  width: 100%;
  margin: 6rem 0;
  display: grid;
  justify-items: center;
`;

export const Title = styled(header)`
  text-align: center;
`;

export const Container = styled.div`
  width: 90%;
  max-width: 136rem;
  display: grid;
  grid-template-columns: 1fr 1fr;

  justify-items: center;
  grid-gap: 1rem;

  ${({ theme }) => theme.mq.sm} {
    grid-gap: 2.5rem;
    width: 80%;
  }

  ${({ theme }) => theme.mq.md} {
    grid-template-columns: 33% 33% 33%;
  }

  ${({ theme }) => theme.mq.lg} {
    width: 60%;
  }
`;

export const Box = styled(wrapper1)`
  width: 100%;
  padding-bottom: 100%;
  border-radius: 1.5rem;
  position: relative;
`;

export const InnerBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  display: grid;
  justify-items: center;
  align-content: space-evenly;
`;

export const BoxTitle = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize[2].sm};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-family: ${({ theme }) => theme.fontFamily.decoration};
  line-height: 140%;
  letter-spacing: 0.04em;

  ${({ theme }) => theme.mq.md} {
    font-size: ${({ theme }) => theme.fontSize[2].md};
  }
`;

export const Image = styled(img)`
  width: 50%;

  background: linear-gradient(
    to left,
    ${({ theme }) => theme.colors.borderA},
    ${({ theme }) => theme.colors.borderB}
  );

  padding: 0.2rem;
  border-radius: 0.5rem;

  & > div {
    background: black;
    border-radius: 0.5rem;
  }

  img {
    border-radius: 0.5rem;
  }

  ${({ theme }) => theme.mq.sm} {
    border-radius: 1.5rem;

    & > div {
      border-radius: 1.5rem;
    }

    img {
      border-radius: 1.5rem;
    }
  }

  ${({ theme }) => theme.mq.md} {
    width: 60%;
  }
`;
