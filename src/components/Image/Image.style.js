import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: relative;
`;

export const StyledContainer = styled.div`
  width: 100%;
  padding-bottom: ${({ ratio }) => ratio}%;
`;

export const StyledImage = styled.img`
  width: 100%;
  position: absolute;
`;
