import styled from 'styled-components/macro';

export const StyledWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledWrapper2 = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(48% + 45rem);
  position: relative;
  :before {
    content: '';
    z-index: -4;
    position: absolute;
    bottom: 0;
    right: 24%;
    width: calc(76% - 20.5rem);
    height: calc(100% - 1.8rem);
    border: 6px solid rgb(112, 112, 112);
  }
`;

export const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 41rem;

  a {
    margin-top: auto;
    margin-bottom: auto;
  }
  :before {
    content: '';
    z-index: -3;
    position: absolute;
    height: 90%;
    width: 45rem;
    background-color: white;
  }
`;

export const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.fonts.size.l};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  margin-bottom: 4rem;
`;

export const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  position: relative;
  :before {
    z-index: -1;
    content: '';
    position: absolute;
    bottom: -3.5rem;
    left: -3.5rem;
    border-right: 64rem solid transparent;
    border-bottom: 64rem solid ${({ theme }) => theme.colors.sand};
  }
  :after {
    z-index: -2;
    content: '';
    position: absolute;
    bottom: -3.5rem;
    left: -3.5rem;
    width: 63.9rem;
    height: 63.9rem;
    border-left: 1px solid ${({ theme }) => theme.colors.text};
    border-bottom: 1px solid ${({ theme }) => theme.colors.text};
  }

  span {
    font-size: ${({ theme }) => theme.fonts.size.s};
    margin-bottom: 2rem;
  }
  span :last-of-type {
    margin-bottom: 0;
  }
`;

export const StyledImage = styled.img`
  position: relative;
  width: 48%;
  min-width: 500px;
  object-fit: contain;
  margin: 10% 0 4.5% 0;
`;
