import React from 'react';
import * as S from './MobileMenu.style';
import Hamburger from '../Hamburger/Hamburger';
import ButtonLang from '../ButtonLang/ButtonLang';
import logo from '../../assets/images/logo';
import useMobileMenuLogic from './MobileMenu.logic';

function MobileMenu({ goToPage }) {
  const { isOpen, toggleMenu, list } = useMobileMenuLogic(goToPage);

  return (
    <S.Wrapper>
      <S.Hamburger isOpen={isOpen}>
        <S.Logo image={logo} alt="logo" />
        <ButtonLang />
        <Hamburger isOpen={isOpen} onClick={toggleMenu} />
      </S.Hamburger>
      <S.Menu isOpen={isOpen}>{list}</S.Menu>
    </S.Wrapper>
  );
}

export default MobileMenu;
