import styled from 'styled-components';

export const StyledButton = styled.a`
  color: inherit;
  text-decoration: inherit;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  position: relative;
`;

export const StyledIcon = styled.i`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: ${({ iconSrc }) => `url(${iconSrc})`};
  background-size: contain;
  background-repeat: no-repeat;
  transform: translate3d(0, 0, 0);
  transition: transform 0.75s ease-in-out;

  :hover {
    transform: scale(1.25) translate3d(0, -1.5rem, 0);
  }
`;
