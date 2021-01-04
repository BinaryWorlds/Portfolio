import React from 'react';
import {
  StyledWrapper,
  StyledHamburger,
  StyledMenu,
  StyledLogo,
} from './MobileMenu.style';
import Hamburger from '../Hamburger/Hamburger';
import ButtonLang from '../ButtonLang/ButtonLang';
import logo from '../../assets/icons/logo.webp';
import useMobileMenuLogic from './MobileMenu.logic';

function MobileMenu({ goToPage }) {
  const { isOpen, toggleMenu, list } = useMobileMenuLogic(goToPage);

  return (
    <StyledWrapper>
      <StyledHamburger isOpen={isOpen}>
        <StyledLogo src={logo} alt="logo" width={512} height={512} />
        <ButtonLang />
        <Hamburger isOpen={isOpen} onClick={toggleMenu} />
      </StyledHamburger>
      <StyledMenu isOpen={isOpen}>{list}</StyledMenu>
    </StyledWrapper>
  );
}

export default MobileMenu;
