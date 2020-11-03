import styled, { css } from 'styled-components';

export const StyledWrapper = styled.div`
  overflow: hidden;
  padding: 0 10%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const StyledTitle = styled.h1`
  position: absolute;
  top: 11.5%;
  display: flex;
  justify-content: center;
  font-size: ${({ theme }) => theme.fonts.size.l};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
`;

const backgroundStyle = css`
  content: '';
  position: absolute;
  left: 0;
  width: 125vh;
  height: 64%;
  background-color: ${({ theme }) => theme.colors.orange};
  border: 1px solid rgb(112, 112, 112, 0.5);
`;

export const StyledImageContainer = styled.div`
  width: 50%;
  position: relative;
  padding-bottom: 31.44%;

  :before {
    z-index: -1;
    top: 32%;
    transform: rotate(-45deg);
    transform-origin: top left;
    ${backgroundStyle}
  }

  :after {
    z-index: -2;
    top: -32%;
    transform: rotate(45deg);
    transform-origin: bottom left;
    ${backgroundStyle};
  }
`;

export const StyledImage = styled.img`
  position: absolute;
  width: 100%;
`;

export const StyledText = styled.div`
  width: 45%;
  max-width: 48rem;
  margin-left: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  & span {
    padding-top: 2rem;
    padding-right: 10rem;
    font-size: ${({ theme }) => theme.fonts.size.s};
  }

  span:first-of-type {
    position: relative;
    left: -10rem;
    padding-right: 0;
  }
`;
