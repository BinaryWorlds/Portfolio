import React from 'react';
import * as S from './Menu.style';
import Hamburger from '../Hamburger/Hamburger';
import useMenuLogic from './Menu.logic';

function Menu({ section }) {
  const { isMenuOpen, toggleMenu, list } = useMenuLogic(section);

  return (
    <S.Wrapper>
      <S.Menu onClick={toggleMenu}>
        <Hamburger isOpen={isMenuOpen} />
      </S.Menu>
      {list}
    </S.Wrapper>
  );
}

export default Menu;
