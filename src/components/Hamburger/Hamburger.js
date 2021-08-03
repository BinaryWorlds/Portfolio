import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

  return (
    <S.Hamburger onClick={handleClick} aria-label="menu">
      <S.Inner isOpen={isMenuOpen} />
    </S.Hamburger>
  );
}

export default Hamburger;
