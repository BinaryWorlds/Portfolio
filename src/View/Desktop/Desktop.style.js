import styled from 'styled-components';
import fadeOut from '../../animations/fadeOut';

export const StyledSiteWrapper = styled.div`
  overflow: hidden;
  position: fixed;
  margin: auto;
  height: 100%;
  width: 100%;
  max-width: 2560px;
  display: flex;
  align-items: center;
`;

export const StyledPageWrapper = styled(StyledSiteWrapper)`
  ${({ theme: { isUnmounted } }) => !isUnmounted && fadeOut};
  position: relative;
`;
