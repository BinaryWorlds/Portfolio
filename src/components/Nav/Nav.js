import React from 'react';
import * as S from './Nav.style';
import { menuSections } from '../../View/siteStructure';
import SvgText from '../SvgText/SvgText';

function Nav() {
  const menuItems = menuSections.map(({ name, id }) => (
    <S.Element key={name}>
      <S.MenuButton smooth to={`/#${id}`} aria-label={name} value={id}>
        <SvgText text={name} />
      </S.MenuButton>
    </S.Element>
  ));

  return (
    <S.Wrapper>
      <S.List>{menuItems}</S.List>
    </S.Wrapper>
  );
}

export default Nav;
