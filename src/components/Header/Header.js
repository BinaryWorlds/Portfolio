import React from 'react';
import { useSelector } from 'react-redux';

import * as S from './Header.style';

import Hamburger from '../Hamburger/Hamburger';
import Nav from '../Nav/Nav';
import MobileMenu from '../MobileMenu/MobileMenu';

import { strokeFilter } from '../SvgText/SvgText';

function Header() {
  const { isMobile } = useSelector((state) => state.app);

  const getHeader = () => {
    if (isMobile === null) return null;
    if (isMobile)
      return (
        <>
          <Hamburger />
          <MobileMenu />
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
