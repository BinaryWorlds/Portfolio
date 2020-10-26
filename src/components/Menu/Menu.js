import React from 'react';
import { StyledWrapper, StyledMenu } from './Menu.style';
import Hamburger from '../Hamburger/Hamburger';
import useMenuLogic from './Menu.logic';

function Menu({ section }) {
  const { isMenuOpen, toggleMenu, list } = useMenuLogic(section);

  return (
    <StyledWrapper>
      <StyledMenu onClick={toggleMenu}>
        <Hamburger isOpen={isMenuOpen} />
      </StyledMenu>
      {list}
    </StyledWrapper>
  );
}

export default Menu;
