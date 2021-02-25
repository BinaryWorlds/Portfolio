import React from 'react';
import Layout from '../../layout/layout';
import Header from '../../components/Header/Header';
import Timeline from '../../components/Timeline/Timeline';
import {
  StyledSiteWrapper,
  StyledPageWrapper,
  StyledHint,
  StyledKey,
} from './Desktop.style';
import pageStructure from '../../pages/pageStructure';
import useDesktopLogic from './Desktop.logic';
import CookiesInfo from '../../components/CookiesInfo/CookiesInfo';

function Desktop() {
  const {
    pageId,
    handleWheel,
    isPageUnmounted,
    setUnmounted,
    isHintShow,
  } = useDesktopLogic();
  const { page, section } = pageStructure[pageId];

  return (
    <Layout extend={{ isUnmounted: isPageUnmounted }}>
      <StyledSiteWrapper>
        <Header section={section} />
        <StyledPageWrapper onWheel={handleWheel} onAnimationEnd={setUnmounted}>
          {page}
        </StyledPageWrapper>
        <Timeline pageId={pageId} section={section} />
        <CookiesInfo />
        <StyledHint isHintShow={isHintShow}>
          <StyledKey>Up</StyledKey>/<StyledKey>Down</StyledKey>
        </StyledHint>
      </StyledSiteWrapper>
    </Layout>
  );
}

export default Desktop;
