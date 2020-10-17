import React from 'react';
import Menu from '../Menu/Menu';
import { StyledHeader } from './Header.style';

function Header({ sectionID }) {
  return (
    <StyledHeader>
      <Menu sectionID={sectionID} />
    </StyledHeader>
  );
}

export default Header;
