import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: relative;
  user-select: none;
`;

export const StyledContainer = styled.div`
  width: 100%;
  padding-bottom: ${({ ratio }) => ratio}%;
`;

export const StyledImage = styled.picture`
  width: 100%;
  position: absolute;

  img {
    width: 100%;
    position: absolute;
  }
`;
