import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSpring } from 'react-spring';
import * as S from './MobileMenu.style';
import { toggleMenu } from '../../store/app/actions';
import { unlockScroll } from '../../utils/scroll';
import { menuSections } from '../../View/siteStructure';

import SvgText from '../SvgText/SvgText';

import { ReactComponent as Icon } from '../../assets/icons/closeIcon.svg';

function MobileMenu() {
  const dispatch = useDispatch();
  const { isMenuOpen } = useSelector((state) => state.app);

  const props = useSpring({
    transform: isMenuOpen ? 'translate(0%, -50%)' : 'translate(100%, -50%)',
  });

  const closeMenu = () => {
    if (!isMenuOpen) return;
    unlockScroll();
    dispatch(toggleMenu());
  };

  const handleClick = () => {
    closeMenu();
  };

  const menuItems = menuSections.map(({ name, id }) => (
    <S.Element key={name}>
      <S.MenuButton smooth aria-label={name} value={id} onClick={handleClick} to={`/#${id}`}>
        <SvgText text={name} />
      </S.MenuButton>
    </S.Element>
  ));

  return (
    <S.Wrapper>
      <S.Container style={props}>
        <S.List>{menuItems}</S.List>
        <S.CloseButton onClick={closeMenu} aria-label="close menu">
          <Icon />
        </S.CloseButton>
      </S.Container>
    </S.Wrapper>
  );
}

export default MobileMenu;
