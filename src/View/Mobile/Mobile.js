import React from 'react';
import Layout from '../../layout/layout';
import * as S from './Mobile.style';
import MobileMenu from '../../components/MobileMenu/MobileMenu';
import useMobileLogic from './Mobile.logic';
import CookiesInfo from '../../components/CookiesInfo/CookiesInfo';

function Mobile() {
  const { loadCounter, loadPages, goToPage, displayLoader } = useMobileLogic();

  return (
    <Layout>
      <S.Wrapper>
        <MobileMenu goToPage={goToPage} />
        {loadPages(loadCounter)}
        {displayLoader}
      </S.Wrapper>
      <CookiesInfo />
    </Layout>
  );
}

export default Mobile;
