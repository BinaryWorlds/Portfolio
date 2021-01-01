import React from 'react';
import Layout from '../../layout/layout';
import { StyledWrapper } from './Mobile.style';
import MobileMenu from '../../components/MobileMenu/MobileMenu';
import useMobileLogic from './Mobile.logic';

function Mobile() {
  const { loadCounter, loadPages, goToPage, displayLoader } = useMobileLogic();

  return (
    <Layout extend={{ isUnmounted: true, isMobile: true }}>
      <StyledWrapper>
        <MobileMenu goToPage={goToPage} />
        {loadPages(loadCounter)}
        {displayLoader}
      </StyledWrapper>
    </Layout>
  );
}

export default Mobile;
