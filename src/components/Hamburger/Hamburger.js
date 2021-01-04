import React from 'react';
import { StyledHamburger, InnerHamburger } from './Hamburger.style';

function Hamburger({ isOpen, onClick }) {
  return (
    <StyledHamburger onClick={onClick} aria-label="menu">
      <InnerHamburger isOpen={isOpen} />
    </StyledHamburger>
  );
}

export default Hamburger;
