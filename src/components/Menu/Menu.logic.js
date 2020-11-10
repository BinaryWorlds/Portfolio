import React from 'react';
import { useStore } from '../../globalState/store';
import { SET_PAGE, TOGGLE_MENU } from '../../globalState/actionTypes';

import { StyledElement, StyledMenuButton } from './Menu.style';

const menuSections = [
  { pl: 'start', en: 'start', val: 0 },
  { pl: 'o mnie', en: 'about me', val: 1 },
  { pl: 'projekty', en: 'projects', val: 2 },
  { pl: 'kontakt', en: 'contact', val: 9 },
];

function useMenuLogic(section) {
  const {
    state: { lang, isMenuOpen },
    dispatch,
  } = useStore();

  const toggleMenu = () => dispatch({ type: TOGGLE_MENU });

  const handleClick = (e) =>
    dispatch({ type: SET_PAGE, payload: e.target.value });

  const currentPage = (
    <StyledElement as="div" text={menuSections[section][lang]} />
  );

  let counter = 1;
  const menuItems = menuSections.map((item, i, arr) => {
    if (i === section) return null;
    const isLast =
      i === arr.length - 1 || (i + 1 === section && section === arr.length - 1);

    return (
      <StyledElement
        isOpen={isMenuOpen}
        active
        last={isLast}
        text={item[lang]}
        key={item.val}
        orderNr={counter++}
      >
        <StyledMenuButton
          aria-label={item[lang]}
          value={item.val}
          onClick={handleClick}
        />
      </StyledElement>
    );
  });

  const list = isMenuOpen ? <ul>{menuItems}</ul> : currentPage;
  return { isMenuOpen, toggleMenu, list };
}

export default useMenuLogic;
