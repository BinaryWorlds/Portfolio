import React from 'react';

import Layout from './layout/layout';
import Header from './components/Header/Header';
import { StyledWrapper } from './App.style';
import pageStructure from './pages/pageStructure';
import useAppLogic from './App.logic';

function App() {
  const { pageId, handleWheel } = useAppLogic();
  const { page, section } = pageStructure[pageId];

  return (
    <Layout>
      <StyledWrapper onWheel={handleWheel}>
        <Header section={section} />
        {page}
      </StyledWrapper>
    </Layout>
  );
}

export default App;
