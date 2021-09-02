import React from 'react';
import Layout from './layout/layout';
import Site from './View/Site';

import useMobile from './hooks/useMobile';

function App() {
  useMobile();

  return (
    <Layout>
      <Site />
    </Layout>
  );
}

export default App;
