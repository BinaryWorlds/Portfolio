import React from 'react';
import Layout from '../../layout/layout';
import Header from '../../components/Header/Header';
import Timeline from '../../components/Timeline/Timeline';
import { StyledWrapper } from './Desktop.style';
import pageStructure from '../../pages/pageStructure';
import useDesktopLogic from './Desktop.logic';

function Desktop() {
  const { pageId, handleWheel, isPageUnmounted } = useDesktopLogic();
  const { page, section } = pageStructure[pageId];

  const showTimeline = section === 2 && (pageId < 5 || pageId === 8);

  return (
    <Layout extend={{ isUnmounted: isPageUnmounted }}>
      <StyledWrapper onWheel={handleWheel}>
        <Header section={section} />
        <Timeline pageId={pageId} showTimeline={showTimeline} />
        {page}
      </StyledWrapper>
    </Layout>
  );
}

export default Desktop;
