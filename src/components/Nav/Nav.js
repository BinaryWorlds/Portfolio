import React from 'react';
import { useSelector } from 'react-redux';
import * as S from './Nav.style';
import { menuSections, idToIndex } from '../../View/siteStructure';
import SvgText from '../SvgText/SvgText';

function Nav() {
  const { activeSection } = useSelector((state) => state.app);

  const handleClick = () => {
    // const nr = e.target.value;
    // console.log(nr);
  };

  const menuItems = menuSections.map(({ name, id }, i) => (
    <S.Element key={name}>
      <S.MenuButton
        active={i === idToIndex[activeSection]}
        aria-label={name}
        value={id}
        onClick={handleClick}>
        <SvgText text={name} />
      </S.MenuButton>
    </S.Element>
  ));

  return (
    <S.Wrapper>
      <S.List addBackground={idToIndex[activeSection] !== 0}>{menuItems}</S.List>
    </S.Wrapper>
  );
}

export default Nav;
