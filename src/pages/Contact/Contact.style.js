import styled, { css } from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  form {
    margin-top: auto;
  }
`;

const eyeStyle = css`
  z-index: -1;
  content: '';
  position: absolute;
  background-color: white;
  width: 7.3rem;
  height: 3.1rem;
  border-radius: 50%;
`;

export const StyledSection = styled.div`
  margin-right: 12rem;
  height: 52rem;
  display: grid;
  grid-column: 1;
  position: relative;

  span {
    margin-top: 2rem;
    font-size: ${({ theme }) => theme.fonts.size.m};
    text-align: center;
  }

  span:first-of-type {
    margin-top: 0;
    margin-bottom: 2rem;
    font-size: ${({ theme }) => theme.fonts.size.xl};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};

    :before {
      ${eyeStyle}
      top: calc(10% + 1.5rem);
      left: 80%;
      transform: rotate(-29deg);
    }

    :after {
      ${eyeStyle}
      top: 10%;
      left: calc(80% + 9.7rem);
      transform: rotate(7deg);
    }
  }

  :before {
    z-index: -2;
    content: '';
    position: absolute;
    background-color: ${({ theme }) => theme.colors.pink};
    width: 100%;
    height: 116%;
    top: -8%;
    left: 50%;
  }
`;

export const StyledButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  a {
    padding: 0.75rem 2rem;
  }
`;
