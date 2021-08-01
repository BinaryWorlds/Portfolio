import styled from 'styled-components';
import Img from '../../components/Background/Background';
import ButtonStart from '../../components/ButtonStart/ButtonStart';

export const Button = styled(ButtonStart)`
  grid-area: 4/1/5/1;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 1;
  display: grid;
  justify-items: center;
  grid-template: 1fr auto 2fr auto 2fr / auto;
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
  letter-spacing: 0.04em;
  font-size: ${({ theme }) => theme.fontSize[2].sm};

  ${({ theme }) => theme.mq.md} {
    font-size: ${({ theme }) => theme.fontSize[2].md};
  }

  ${({ theme }) => theme.mq.lg} {
    font-size: ${({ theme }) => theme.fontSize[2].lg};
  }
`;

export const Name = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: ${({ theme }) => theme.fontSize[5].sm};
  line-height: 135%;
  letter-spacing: 0.04em;

  ${({ theme }) => theme.mq.sm} {
    margin: 1rem 0;
  }

  ${({ theme }) => theme.mq.md} {
    font-size: ${({ theme }) => theme.fontSize[5].md};
  }

  ${({ theme }) => theme.mq.lg} {
    font-size: ${({ theme }) => theme.fontSize[5].lg};
  }
`;

export const Card = styled.div`
  width: 32rem;
  height: 23.5rem;
  padding: 2rem;
  padding-right: 3.5rem;
  background-color: ${({ theme }) => theme.colors.glass};
  backdrop-filter: blur(5px);
  border-radius: 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  grid-area: 2/1/3/1;

  ${Text}:nth-of-type(1) {
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }

  ${Text}:last-of-type {
    align-self: flex-end;
  }

  ${({ theme }) => theme.mq.sm} {
    width: 42rem;
    height: 20rem;

    br {
      display: none;
    }
  }

  ${({ theme }) => theme.mq.md} {
    width: 50rem;
    height: 24rem;
  }

  ${({ theme }) => theme.mq.lg} {
    width: 65rem;
    height: 32rem;
  }
`;
