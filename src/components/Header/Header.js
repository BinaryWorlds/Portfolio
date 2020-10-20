import React from 'react';
import Menu from '../Menu/Menu';
import { StyledHeader } from './Header.style';

function Header({ section }) {
  return (
    <StyledHeader>
      <Menu section={section} />
    </StyledHeader>
  );
}

export default Header;
