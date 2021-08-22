import styled from 'styled-components';
import { header } from '../../ui/header';
import { para } from '../../ui/para';
import { wrapper1 } from '../../ui/glass';
import Img from '../../components/Background/Background';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 136rem;
  align-self: center;
  position: relative;
  display: grid;
  justify-items: center;
  grid-template-rows: auto auto 15rem;
  grid-template-columns: 6fr 4fr;

  ${({ theme }) => theme.mq.portrait} {
    grid-template-rows: auto auto 25rem;
  }

  ${({ theme }) => theme.mq.md} {
    grid-template-rows: auto auto 30rem;
  }
`;

export const Title = styled(header)`
  grid-area: 1 / span 3;
`;

export const Card = styled(wrapper1)`
  width: 80%;
  padding: 3rem 2rem;
  border-radius: 1.5rem;
  grid-area: 2/1/2/3;
  margin: 5rem 0;

  ${({ theme }) => theme.mq.md} {
    grid-area: 2/1/2/2;
  }
`;

export const Background = styled(Img)`
  background-position: 35% center;
  z-index: -1;
  grid-area: 2/1/5/3;
  width: 100%;
  opacity: 0.6;
`;

export const Text = styled(para)``;
