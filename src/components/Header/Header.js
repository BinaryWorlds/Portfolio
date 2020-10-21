import React from 'react';
import ButtonLang from '../ButtonLang/ButtonLang';
import Menu from '../Menu/Menu';
import { StyledHeader } from './Header.style';

function Header({ section }) {
  return (
    <StyledHeader>
      <ButtonLang />
      <Menu section={section} />
    </StyledHeader>
  );
}

export default Header;
