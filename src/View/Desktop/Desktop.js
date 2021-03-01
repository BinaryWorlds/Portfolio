import React from 'react';
import Layout from '../../layout/layout';
import Header from '../../components/Header/Header';
import Timeline from '../../components/Timeline/Timeline';
import * as S from './Desktop.style';
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
      <S.SiteWrapper>
        <Header section={section} />
        <S.PageWrapper onWheel={handleWheel} onAnimationEnd={setUnmounted}>
          {page}
        </S.PageWrapper>
        <Timeline pageId={pageId} section={section} />
        <CookiesInfo />
        <S.Hint isHintShow={isHintShow}>
          <S.Key>Up</S.Key>/<S.Key>Down</S.Key>
        </S.Hint>
      </S.SiteWrapper>
    </Layout>
  );
}

export default Desktop;
