import styled from 'styled-components';

export const StyledWrapper = styled.div`
  overflow: hidden;
  padding: 0 10%;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;
export const StyledImageWrapper = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  right: -20rem;
  transform: rotate(50deg);
  height: 60%;
  border-left: 1px solid black;
`;
export const StyledImage = styled.img`
  height: 100%;
  object-fit: contain;
`;

export const StyledTitle = styled.h1``;
export const StyledDescription = styled.div``;
