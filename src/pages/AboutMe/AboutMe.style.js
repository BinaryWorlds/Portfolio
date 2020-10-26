import styled, { css } from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10%;
`;

export const StyledTitle = styled.h1`
  position: relative;
  font-size: ${({ theme }) => theme.fonts.size.m};
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
  width: 50%;
  max-width: 500px;
  margin: 8% 0;
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
  width: 100%;
  padding: 0 10%;
  display: flex;
  flex: wrap;
  justify-content: space-around;
  align-items: stretch;
  list-style: none;
`;

export const StyledColumn = styled.li`
  width: 18rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

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
        top = '1rem';
        left = '-5.5rem';
      }
      if (val === 2) {
        top = '3rem';
      }

      if (val === 3) {
        top = '-9rem';
      }

      return css`
        top: ${top};
        left: ${left};
      `;
    }}
  }
`;
