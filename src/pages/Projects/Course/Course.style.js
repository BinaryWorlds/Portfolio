import styled from 'styled-components';

export const StyledWrapper = styled.div`
  padding: 0 10%;
  height: 100%;
  width: 100%;
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  position: relative;

  :before,
  :after {
    z-index: -1;
    content: '';
    position: absolute;
  }

  :before {
    top: 0;
    left: 10%;
    height: 100%;
    width: 17%;
    border: 1px solid rgba(112, 112, 112, 0.5);
    background-color: ${({ theme }) => theme.colors.orange};
  }

  :after {
    bottom: 0;
    right: 0;
    width: 0;
    height: 0;
    border-left: 11.5vw solid transparent;
    border-bottom: 11.5vw solid rgba(0, 0, 0, 0.5);
  }
`;

export const StyledImageWrapper = styled.div`
  position: relative;
  width: 55%;
  padding-bottom: 28.875%;
  margin-left: 3%;
  margin-bottom: 2vw;
`;

export const StyledImage = styled.img`
  position: absolute;
  width: 100%;
`;

export const StyledTitle = styled.div`
  font-size: ${({ theme }) => theme.fonts.size.l};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 42%;

  button {
    margin-top: 4rem;
    margin-left: 4rem;
  }
`;

export const StyledWrapper2 = styled.div`
  display: flex;
`;

export const StyledVisitButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 17vw;
`;

export const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 6px solid rgb(112, 112, 112);
  max-width: 70%;
  position: relative;
  left: -3px;

  span {
    margin-left: 4rem;
    margin-bottom: 2rem;
    font-size: ${({ theme }) => theme.fonts.size.s};
  }

  span :last-of-type {
    margin-bottom: 0;
  }
`;
