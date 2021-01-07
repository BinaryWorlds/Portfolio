import React, { useState, useEffect } from 'react';
import { useStore } from '../../globalState/store';
import { StyledElement, StyledMenuButton } from './MobileMenu.style';

const menuSections = [
  { pl: 'Start', en: 'Start', val: 0 },
  { pl: 'O mnie', en: 'About me', val: 1 },
  { pl: 'Teraz', en: 'Now', val: 2 },
  { pl: 'To portfolio', en: 'This portfolio', val: 3 },
  { pl: 'Kurs', en: 'Course', val: 4 },
  { pl: 'Mój produkt', en: 'My product', val: 8 },
  { pl: 'Kontakt', en: 'Contact', val: 9 },
];

export default function useMobileMenuLogic(goToPage) {
  const {
    state: { lang },
  } = useStore();

  const [isOpen, isMenuOpen] = useState(false);

  const lockScroll = () => {
    const { style } = document.body;
    style.top = `-${window.scrollY}px`;
    style.position = 'fixed';
  };

  const unlockScroll = () => {
    const { style } = document.body;
    const scrollY = parseInt(style.top, 10) * -1;
    style.position = '';
    style.top = '';
    window.scrollTo(0, scrollY);
  };

  useEffect(() => {
    window.onbeforeunload = () => window.scrollTo(0, 0);
    return () => unlockScroll();
  }, []);

  const toggleMenu = () => {
    if (isOpen) unlockScroll();
    else lockScroll();
    isMenuOpen(!isOpen);
  };

  const handleClick = (e) => {
    toggleMenu();
    goToPage(+e.target.value);
  };

  const menuItems = menuSections.map((item) => (
    <StyledElement key={item.val}>
      <StyledMenuButton
        aria-label={item[lang]}
        value={item.val}
        onClick={handleClick}
      >
        {item[lang]}
      </StyledMenuButton>
    </StyledElement>
  ));

  const list = <ul>{menuItems}</ul>;

  return { isOpen, toggleMenu, list };
}
