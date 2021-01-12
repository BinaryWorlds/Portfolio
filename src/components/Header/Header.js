import React from 'react';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import ButtonLang from '../ButtonLang/ButtonLang';
import Menu from '../Menu/Menu';
import { StyledHeader, StyledSection } from './Header.style';
import githubIcon from '../../assets/icons/github.png';

function Header({ section }) {
  const ghProfile = 'https://github.com/BinaryWorlds';
  return (
    <StyledHeader>
      <StyledSection>
        <ButtonIcon
          size={41}
          link={ghProfile}
          iconSrc={githubIcon}
          ariaLabel="github"
        />
        <ButtonLang />
      </StyledSection>
      <Menu section={section} />
    </StyledHeader>
  );
}

export default Header;
