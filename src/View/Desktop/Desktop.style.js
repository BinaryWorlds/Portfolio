import styled from 'styled-components';
import fadeOut from '../../animations/fadeOut';

export const StyledSiteWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  height: 100%;
  width: 100%;
  max-width: 2560px;
  transform: translateX(-50%);
`;

export const StyledPageWrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  max-width: 2560px;
  display: flex;
  align-items: center;
  ${({ theme: { isUnmounted } }) => !isUnmounted && fadeOut};
`;
