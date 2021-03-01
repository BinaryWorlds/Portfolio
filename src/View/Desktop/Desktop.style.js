import styled from 'styled-components';
import fadeOut from '../../animations/fadeOut';
import { BasicHint } from '../../hooks/useHint';

export const SiteWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  height: 100%;
  width: 100%;
  max-width: 2560px;
  transform: translateX(-50%);
`;

export const PageWrapper = styled.div`
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

export const Hint = styled(BasicHint)`
  top: 50%;
  right: 0;
  text-align: center;
  transform: translate(-50%, -50%);
`;

export const Key = styled.div`
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
