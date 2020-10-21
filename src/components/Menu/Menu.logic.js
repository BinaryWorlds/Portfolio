import React, { useState } from 'react';
import { useStore } from '../../globalState/store';
import { SET_PAGE } from '../../globalState/actionTypes';

import { StyledElement, StyledMenuButton } from './Menu.style';

const menuSections = [
  { pl: 'start', en: 'start', val: 0 },
  { pl: 'o mnie', en: 'about me', val: 1 },
  { pl: 'projekty', en: 'projects', val: 2 },
  { pl: 'kontakt', en: 'contact', val: 9 },
];

function useMenuLogic(section) {
  const {
    state: { lang },
    dispatch,
  } = useStore();

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const handleClick = (e) =>
    dispatch({ type: SET_PAGE, payload: e.target.value });

  const currentPage = <StyledElement text={menuSections[section][lang]} />;

  const menuItems = menuSections.map((item, i, arr) => {
    if (i === section) return null;
    const isLast =
      i === arr.length - 1 || (i + 1 === section && section === arr.length - 1);

    return (
      <StyledElement active last={isLast} text={item[lang]} key={item.val}>
        <StyledMenuButton value={item.val} onClick={handleClick} />
      </StyledElement>
    );
  });

  const list = isOpen ? <ul>{menuItems}</ul> : currentPage;
  return { isOpen, toggleMenu, list };
}
export default useMenuLogic;
