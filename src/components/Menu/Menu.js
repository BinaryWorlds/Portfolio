import React from 'react';
import { StyledWrapper, StyledMenu } from './Menu.style';
import Hamburger from '../Hamburger/Hamburger';
import useMenuLogic from './Menu.logic';

function Menu({ section }) {
  const { isOpen, toggleMenu, list } = useMenuLogic(section);

  return (
    <StyledWrapper>
      <StyledMenu isOpen={isOpen} onClick={toggleMenu}>
        <Hamburger isOpen={isOpen} />
      </StyledMenu>
      {list}
    </StyledWrapper>
  );
}

export default Menu;
