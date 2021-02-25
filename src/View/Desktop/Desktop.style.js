import styled from 'styled-components';
import fadeOut from '../../animations/fadeOut';
import { StyledHint as Hint } from '../../hooks/useHint';

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

export const StyledHint = styled(Hint)`
  top: 50%;
  right: 0;
  text-align: center;
  transform: translate(-50%, -50%);
`;

export const StyledKey = styled.div`
  margin: 0.4rem;
  width: 6rem;
  height: 6rem;
  border: 0.4rem solid white;
  border-radius: 15%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
