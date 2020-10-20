import styled from 'styled-components';
import fadeIn from '../../animations/fadeIn';
import fadeOut from '../../animations/fadeOut';

export const StyledImage = styled.div`
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.16);
  margin-top: 10vh;
  width: 347px;
  height: 430px;
`;
export const StyledText = styled.div`
  padding: 3vh 0;
  font: inherit;
`;

export const StyledHello = styled.div`
  font-size: ${({ theme }) => theme.fonts.size.l};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledWrapper = styled.div`
  ${({ isMount }) => (isMount ? fadeOut : fadeIn)};
  padding: 0 10vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  ::after {
    position: absolute;
    bottom: 0;
    content: '';
    background: ${({ theme }) => theme.colors.blue};
    z-index: -1;
    width: 100vw;
    height: 37vh;
  }
`;
