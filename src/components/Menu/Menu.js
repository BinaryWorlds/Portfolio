import React, { useState } from 'react';
import { StyledWrapper, StyledMenu, StyledElement } from './Menu.style';
import Hamburger from '../Hamburger/Hamburger';

const menuTexts = ['start', 'o mnie', 'projekty', 'kontakt'];

function Menu({ section }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const currentPage = <StyledElement text={menuTexts[section]} />;

  const menuItems = menuTexts.map((item, i, arr) => {
    if (i === section) return null;
    if (
      i === arr.length - 1 ||
      (i + 1 === section && section === arr.length - 1)
    )
      return <StyledElement last text={item} key={item} />;
    return <StyledElement active text={item} key={item} />;
  });

  return (
    <StyledWrapper>
      <StyledMenu onClick={toggleMenu}>
        <Hamburger isOpen={isOpen} />
      </StyledMenu>
      {isOpen ? <ul>{menuItems}</ul> : currentPage}
    </StyledWrapper>
  );
}

export default Menu;
