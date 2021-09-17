import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './layout/layout';
import Site from './View/Site';

import useMobile from './hooks/useMobile';

function App() {
  useMobile();

  return (
    <Layout>
      <Router>
        <Site />
      </Router>
    </Layout>
  );
}

export default App;
