import React from 'react';
import Layout from '../../layout/layout';
import Header from '../../components/Header/Header';
import { StyledWrapper } from './Desktop.style';
import pageStructure from '../../pages/pageStructure';
import useDesktopLogic from './Desktop.logic';

function Desktop() {
  const { pageId, handleWheel, isPageUnmounted } = useDesktopLogic();
  const { page, section } = pageStructure[pageId];

  return (
    <Layout extend={{ isUnmounted: isPageUnmounted }}>
      <StyledWrapper onWheel={handleWheel}>
        <Header section={section} />
        {page}
      </StyledWrapper>
    </Layout>
  );
}

export default Desktop;
