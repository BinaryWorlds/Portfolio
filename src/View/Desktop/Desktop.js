import React from 'react';
import Layout from '../../layout/layout';
import Header from '../../components/Header/Header';
import Timeline from '../../components/Timeline/Timeline';
import { StyledSiteWrapper, StyledPageWrapper } from './Desktop.style';
import pageStructure from '../../pages/pageStructure';
import useDesktopLogic from './Desktop.logic';

function Desktop() {
  const {
    pageId,
    handleWheel,
    isPageUnmounted,
    setUnmounted,
  } = useDesktopLogic();
  const { page, section } = pageStructure[pageId];

  return (
    <Layout extend={{ isUnmounted: isPageUnmounted }}>
      <StyledSiteWrapper>
        <Header section={section} />
        <Timeline pageId={pageId} section={section} />
        <StyledPageWrapper onWheel={handleWheel} onAnimationEnd={setUnmounted}>
          {page}
        </StyledPageWrapper>
      </StyledSiteWrapper>
    </Layout>
  );
}

export default Desktop;
