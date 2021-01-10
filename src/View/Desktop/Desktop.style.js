import styled from 'styled-components';
import fadeOut from '../../animations/fadeOut';

export const StyledSiteWrapper = styled.div`
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  height: 100vh;
  width: 100vw;
  max-width: 2560px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledPageWrapper = styled(StyledSiteWrapper)`
  ${({ theme: { isUnmounted } }) => !isUnmounted && fadeOut};
`;
