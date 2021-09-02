import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSpring } from 'react-spring';
import * as S from './Hamburger.style';
import { toggleMenu } from '../../store/app/actions';
import { lockScroll, unlockScroll } from '../../utils/scroll';

function Hamburger() {
  const dispatch = useDispatch();
  const { isMenuOpen } = useSelector((state) => state.app);

  const handleClick = () => {
    dispatch(toggleMenu());
    if (isMenuOpen) unlockScroll();
    else lockScroll();
  };

  const one = useSpring({
    transform: `translate(-50%, ${isMenuOpen ? '0rem' : '-1rem'} ) rotate(${
      isMenuOpen ? '45deg' : '0deg'
    })`,
  });

  const two = useSpring({
    transform: 'translateX(-50%)',
    background: isMenuOpen ? 'transparent' : `white`,
  });

  const three = useSpring({
    transform: `translate(-50%, ${isMenuOpen ? '0rem' : '1rem'} ) rotate(${
      isMenuOpen ? '-45deg' : '0deg'
    })`,
  });

  return (
    <S.Hamburger onClick={handleClick} aria-label="menu">
      <S.Inner style={one} />
      <S.Inner style={two} />
      <S.Inner style={three} />
    </S.Hamburger>
  );
}

export default Hamburger;
