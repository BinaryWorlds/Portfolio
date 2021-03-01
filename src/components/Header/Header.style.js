import styled from 'styled-components';

export const Header = styled.header`
  position: absolute;
  z-index: 100;
  top: 4vh;
  right: 2vw;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 44rem;

  ${({ theme }) => theme.mq.huge} {
    transform-origin: top right;
    transform: scale(1.5);
  }
`;

export const Section = styled.div`
  position: relative;
  top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 17rem;
`;
