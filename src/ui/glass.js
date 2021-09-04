import styled from 'styled-components';

export const wrapper1 = styled.div`
  background: ${({ theme }) => theme.colors.glass};

  box-shadow: inset 0 0.2rem 0.4rem ${({ theme }) => theme.colors.shadow15},
    inset 0.2rem 0 0.4rem ${({ theme }) => theme.colors.shadow15};
  backdrop-filter: blur(0.5rem);
`;
