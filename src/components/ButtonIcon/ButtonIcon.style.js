import styled from 'styled-components';

export const StyledButton = styled.a`
  color: inherit;
  text-decoration: inherit;
`;
export const StyledIcon = styled.i`
  display: block;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background-image: ${({ iconSrc }) => `url(${iconSrc})`};
  background-size: contain;
  background-repeat: no-repeat;
`;
