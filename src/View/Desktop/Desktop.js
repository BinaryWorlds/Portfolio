import React from 'react';

import Header from '../../components/Header/Header';
import { StyledWrapper } from './Desktop.style';
import pageStructure from '../../pages/pageStructure';
import useDesktopLogic from './Desktop.logic';

function Desktop() {
  const { pageId, handleWheel } = useDesktopLogic();
  const { page, section } = pageStructure[pageId];

  return (
    <StyledWrapper onWheel={handleWheel}>
      <Header section={section} />
      {page}
    </StyledWrapper>
  );
}

export default Desktop;
