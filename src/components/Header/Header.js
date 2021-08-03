import React from 'react';
import * as S from './Header.style';

import Hamburger from '../Hamburger/Hamburger';
import Nav from '../Nav/Nav';

function Header() {
  return (
    <S.Header>
      <Hamburger />
      <Nav />
    </S.Header>
  );
}

export default Header;
