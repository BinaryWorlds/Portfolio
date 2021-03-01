import React from 'react';
import * as S from './Hamburger.style';

function Hamburger({ isOpen, onClick }) {
  return (
    <S.Hamburger onClick={onClick} aria-label="menu">
      <S.InnerHamburger isOpen={isOpen} />
    </S.Hamburger>
  );
}

export default Hamburger;
