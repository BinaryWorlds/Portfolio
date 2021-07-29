import styled from 'styled-components';

export const Container = styled.div`
  background-image: url(${({ url }) => url});
  background-size: cover;
  background-position: left center;
  min-height: 100%;
  height: 100%;
  width: 100%;
`;

export const Image = styled.picture`
  display: none;
`;
