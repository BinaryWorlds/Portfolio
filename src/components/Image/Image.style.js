import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: relative;
  user-select: none;
`;

export const StyledContainer = styled.div`
  width: 100%;
  padding-bottom: ${({ ratio }) => ratio}%;
  transform: translate3d(0, 0, 0);
`;

export const StyledImage = styled.img`
  width: 100%;
  position: absolute;
`;
