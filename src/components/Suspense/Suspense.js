import React from 'react';
import styled from 'styled-components';

const StyledLoader = styled.div`
  width: 100vw;
  height: 100vh;
`;

function Fallback() {
  return <StyledLoader />;
}

function Suspense({ children }) {
  return <React.Suspense fallback={<Fallback />}> {children}</React.Suspense>;
}

export default Suspense;
