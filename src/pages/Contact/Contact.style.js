import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const StyledSection = styled.div`
  margin-right: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  span {
    margin-top: 2rem;
    font-size: ${({ theme }) => theme.fonts.size.m};
    text-align: center;
  }
  span:first-of-type {
    font-size: ${({ theme }) => theme.fonts.size.xl};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
  }
  :before {
    z-index: -2;
    content: '';
    position: absolute;
    background-color: ${({ theme }) => theme.colors.pink};
    width: 100%;
    height: 120%;
    top: -10%;
    left: 50%;
  }
`;
export const StyledButtons = styled.div`
  display: flex;
  a {
    padding: 0.9rem 2rem;
  }
`;
