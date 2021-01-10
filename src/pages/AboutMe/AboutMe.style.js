import styled, { css } from 'styled-components';
import spinEffect from '../../animations/spinEffect';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10%;
`;

export const StyledTitle = styled.h1`
  position: relative;
  font-size: ${({ theme }) => theme.fonts.size.l};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};

  top: 5%;
  margin: 15% 0;

  :before {
    content: '';
    z-index: -1;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 42%;
    left: 32%;
    background: ${({ theme }) => theme.colors.pinkB};
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  }

  ${({ theme }) => theme.mq.phone} {
    font-size: ${({ theme }) => theme.fonts.size.m};
  }

  ${({ theme }) => theme.mq.middle} {
    top: 2%;
    margin: 1% 0;
  }

  ${({ theme }) => theme.mq.desktop} {
    top: 0;
    margin: 0;
  }

  ${({ theme }) => theme.mq.huge} {
    font-size: ${({ theme }) => theme.fonts.size.xxl};
  }

  ${spinEffect(1)};
`;

export const StyledText = styled.div`
  position: relative;
  z-index: 2;
  width: 40%;
  min-width: 500px;
  margin: 10% 0;
  font-size: ${({ theme }) => theme.fonts.size.s};

  ::before {
    content: '';
    z-index: -1;
    position: absolute;
    top: -20%;
    left: -15%;
    width: 130%;
    height: 140%;
    background: ${({ theme }) => theme.colors.pinkB};
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  }

  ${({ theme }) => theme.mq.phone} {
    font-size: ${({ theme }) => theme.fonts.size.xs};
    min-width: unset;
    width: 90%;

    :before {
      top: -10%;
      left: -10%;
      width: 120%;
      height: 120%;
    }
  }

  ${({ theme }) => theme.mq.middle} {
    min-width: 600px;
  }

  ${({ theme }) => theme.mq.huge} {
    font-size: ${({ theme }) => theme.fonts.size.m};
  }

  ${spinEffect(2)};
`;

export const StyledTable = styled.ul`
  width: 100vw;
  padding: 0 5%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  list-style: none;

  ${({ theme }) => theme.mq.phone} {
    margin: 5% 0;
  }
`;

export const StyledColumn = styled.li`
  width: 24rem;
  height: 26rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  span {
    font-size: ${({ theme }) => theme.fonts.size.m};
  }

  span:first-of-type {
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    padding-bottom: 2rem;
  }

  :before {
    content: '';
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.pinkB};
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);

    ${({ val }) => {
      let top = 0;
      let left = 0;
      if (val === 1) {
        top = '6%';
        left = '-29%';
      }
      if (val === 2) top = '15%';
      if (val === 3) top = '-35%';

      return css`
        top: ${top};
        left: ${left};
      `;
    }}
  }

  ${({ theme }) => theme.mq.phone} {
    margin: 3% 0;
    width: 18rem;
    height: 20rem;

    ${({ val }) =>
      val === 3 &&
      css`
        margin-top: 18%;
        height: 12rem;

        :before {
          top: -15%;
        }
      `}

    span {
      font-size: ${({ theme }) => theme.fonts.size.xs};
    }
  }

  ${({ theme }) => theme.mq.huge} {
    width: 30rem;
    height: 33rem;

    span {
      font-size: ${({ theme }) => theme.fonts.size.l};
    }
  }

  ${({ val }) => spinEffect(2 + val)};
`;
