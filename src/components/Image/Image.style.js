import styled from 'styled-components';

export const Wrapper = styled.div`
  user-select: none;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: ${({ ratio }) => ratio}%;
`;

export const Image = styled.picture`
  width: 100%;
  position: absolute;

  img {
    width: 100%;
    position: absolute;
  }
`;
