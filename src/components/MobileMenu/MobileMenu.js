import React from 'react';
import {
  StyledWrapper,
  StyledHamburger,
  StyledMenu,
  StyledLogo,
} from './MobileMenu.style';
import Hamburger from '../Hamburger/Hamburger';

import logo from '../../assets/icons/logo.webp';
import useMobileMenuLogic from './MobileMenu.logic';

function MobileMenu({ goToPage }) {
  const { isOpen, toggleMenu, list } = useMobileMenuLogic(goToPage);

  return (
    <StyledWrapper>
      <StyledHamburger onClick={toggleMenu}>
        <Hamburger isOpen={isOpen} />
      </StyledHamburger>
      <StyledMenu isOpen={isOpen}>
        <StyledLogo src={logo} alt="logo" width={512} height={512} />
        {list}
      </StyledMenu>
    </StyledWrapper>
  );
}

export default MobileMenu;
