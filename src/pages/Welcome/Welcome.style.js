import styled from 'styled-components';
import fadeIn from '../../animations/fadeIn';
import { BasicHint } from '../../hooks/useHint';

import Img from '../../components/Image/Image';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 7%;
  padding-top: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  :after {
    position: absolute;
    left: 0;
    bottom: 0;
    content: '';
    background: ${({ theme }) => theme.colors.blue};
    z-index: -1;
    width: 100%;
    height: 25%;
  }

  ${({ theme }) => theme.mq.phone} {
    padding: 5%;

    :after {
      content: none;
    }
  }

  ${({ theme }) => theme.mq.phoneP} {
    margin-bottom: 10%;
    height: 100vh;
  }

  ${({ theme }) => theme.mq.phoneL} {
    height: 100vh;
  }

  ${({ theme }) => theme.mq.middle} {
    flex-direction: row;
    justify-content: space-around;
    padding: 0 10%;
    padding-top: 0;

    :after {
      height: 37%;
    }
  }

  ${fadeIn};
`;

export const Hello = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  padding-top: 2%;

  ${({ theme }) => theme.mq.phoneP} {
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
  }

  ${({ theme }) => theme.mq.phoneL} {
    padding: 0;
  }

  ${({ theme }) => theme.mq.middle} {
    width: auto;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 0;
  }
`;

export const Image = styled(Img)`
  width: 60%;
  margin-right: 5%;

  ${({ theme }) => theme.mq.phoneP} {
    width: 80%;
    margin: 0;
  }

  ${({ theme }) => theme.mq.phoneL} {
    width: 50%;
  }

  ${({ theme }) => theme.mq.middle} {
    margin-top: 10%;
    margin-right: 0;
    width: 100%;
  }

  ${({ theme }) => theme.mq.hd} {
    width: 120%;
  }

  ${({ theme }) => theme.mq.huge} {
    width: 100%;
  }
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.16);
`;

export const MeetMe = styled.div`
  font-size: ${({ theme }) => theme.fonts.size.l};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  ${({ theme }) => theme.mq.phone} {
    button {
      margin: 6% 0;
    }
  }
`;

export const Text = styled.h1`
  position: relative;

  :after {
    position: absolute;
    content: '';
    background: ${({ theme }) => theme.colors.blue};
    z-index: -1;
    width: 110%;
    height: 110%;
    top: -5%;
    left: -5%;
  }

  order: 1;
  margin: 10% 0;
  padding: 3% 0;
  font: inherit;

  ${({ theme }) => theme.mq.phone} {
    margin: 0;
    text-align: center;
  }

  ${({ theme }) => theme.mq.middle} {
    order: 0;
    margin: 0;
    white-space: nowrap;

    :after {
      content: none;
    }
  }

  ${({ theme }) => theme.mq.huge} {
    font-size: ${({ theme }) => theme.fonts.size.xxl};
  }
`;

export const Hint = styled(BasicHint)`
  left: 50%;
  top: 0;
  transform: translate(-50%, -100%);

  ${({ theme }) => theme.mq.middle} {
    top: 100%;
    transform: translate(75%, -100%);
  }
`;
