import React from 'react';

function Suspense({ children }) {
  return <React.Suspense fallback={null}> {children}</React.Suspense>;
}

export default Suspense;
