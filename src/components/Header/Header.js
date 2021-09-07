import React from 'react';
import { useSelector } from 'react-redux';

import * as S from './Header.style';

import Hamburger from '../Hamburger/Hamburger';
import Nav from '../Nav/Nav';

import { strokeFilter } from '../SvgText/SvgText';

const MobileMenu = React.lazy(() => import('../MobileMenu/MobileMenu'));

function Header() {
  const { isMobile, loadMore } = useSelector((state) => state.app);

  const getHeader = () => {
    if (isMobile === null) return null;
    if (isMobile)
      return (
        <>
          <Hamburger />
          {loadMore && (
            <React.Suspense fallback={<div style={{ position: 'fixed' }} />}>
              <MobileMenu />
            </React.Suspense>
          )}
        </>
      );
    return <Nav />;
  };

  return (
    <S.Header>
      {getHeader()}
      {strokeFilter}
    </S.Header>
  );
}

export default Header;
