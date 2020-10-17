import React, { useState } from 'react';

import Layout from './layout/layout';
import Header from './components/Header/Header';
import { StyledWrapper } from './App.style';
import pageStructure from './pages/pageStructure';

import constrainVal from './utils/constrainVal';

function App() {
  const [pageId, setPageId] = useState(0);

  const handleWheel = (deltaY) => {
    let newPageId = pageId;
    if (deltaY > 0) newPageId += 1;
    if (deltaY < 0) newPageId -= 1;
    newPageId = constrainVal(newPageId, 0, pageStructure.last);
    setPageId(newPageId);
  };

  let timerId;
  const debouncedHandleWheel = (e) => {
    if (e.ctrlKey) return;
    e.persist();

    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => {
      handleWheel(e.deltaY);
      timerId = null;
    }, 500);
  };

  return (
    <Layout>
      <Header sectionID={pageStructure[pageId].section} />
      <StyledWrapper onWheel={debouncedHandleWheel}>
        {pageStructure[pageId].page}
      </StyledWrapper>
    </Layout>
  );
}

export default App;
