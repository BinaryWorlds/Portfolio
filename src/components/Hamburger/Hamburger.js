import React from 'react';
import { StyledHamburger, InnerHamburger } from './Hamburger.style';

function Hamburger({ isOpen }) {
  return (
    <StyledHamburger aria-label="menu">
      <InnerHamburger isOpen={isOpen} />
    </StyledHamburger>
  );
}

export default Hamburger;
