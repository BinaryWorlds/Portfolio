import styled, { css } from 'styled-components';
import spinEffect from '../../animations/spinEffect';
import fadeOut from '../../animations/fadeOut';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10%;
  ${({ isMounted }) => (isMounted ? fadeOut : spinEffect)};
`;

export const StyledTitle = styled.h1`
  position: relative;
  font-size: ${({ theme }) => theme.fonts.size.l};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};

  :before {
    content: '';
    z-index: -1;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 16px;
    left: 32px;
    background: ${({ theme }) => theme.colors.pinkB};
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  }
`;

export const StyledText = styled.div`
  position: relative;
  z-index: 2;
  width: 40%;
  min-width: 600px;
  margin: 8% 0;
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
`;

export const StyledTable = styled.ul`
  width: 100vw;
  padding: 0 5%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
  list-style: none;
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

  ::before {
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
        top = '1.5rem';
        left = '-7rem';
      }
      if (val === 2) top = '4rem';
      if (val === 3) top = '-9rem';

      return css`
        top: ${top};
        left: ${left};
      `;
    }}
  }
`;
