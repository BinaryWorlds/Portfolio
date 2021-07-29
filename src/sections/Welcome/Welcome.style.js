import styled from 'styled-components';
import Img from '../../components/Background/Background';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 1;
`;

export const Background = styled(Img)`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  opacity: 0.6;
`;

export const Text = styled.p`
  font-size: 1.8rem;

  ${({ theme }) => theme.mq.md} {
    font-size: 5.3rem;
  }
`;

export const Name = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 130%;
  font-size: 5.3rem;

  ${({ theme }) => theme.mq.md} {
    font-size: 8rem;
  }
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.glass};
  backdrop-filter: blur(5px);
  border-radius: 1.5rem;
  display: inline-block;

  ${Text}:nth-of-type(3) {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;
