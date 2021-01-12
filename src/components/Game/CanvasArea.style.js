import styled from 'styled-components';

export const StyledCanvas = styled.canvas`
  touch-action: manipulation;
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.2));
  ${({ theme }) => theme.mq.middle} {
    margin-left: 2rem;
  }
`;
