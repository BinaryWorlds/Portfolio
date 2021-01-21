import styled from 'styled-components';
import fadeOut from '../../animations/fadeOut';

export const StyledSiteWrapper = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  max-width: 2560px;
`;

export const StyledPageWrapper = styled(StyledSiteWrapper)`
  position: relative;
  display: flex;
  align-items: center;
  ${({ theme: { isUnmounted } }) => !isUnmounted && fadeOut};
`;
