import React from 'react';
import * as S from './Header.style';

import Hamburger from '../Hamburger/Hamburger';
import Nav from '../Nav/Nav';
import MobileMenu from '../MobileMenu/MobileMenu';

import { strokeFilter } from '../SvgText/SvgText';

function Header() {
  return (
    <S.Header>
      {strokeFilter}
      <Hamburger />
      <MobileMenu />
      <Nav />
    </S.Header>
  );
}

export default Header;
