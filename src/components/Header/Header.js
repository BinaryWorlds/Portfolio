import React from 'react';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import ButtonLang from '../ButtonLang/ButtonLang';
import Menu from '../Menu/Menu';
import * as S from './Header.style';
import githubIcon from '../../assets/icons/github.png';

function Header({ section }) {
  const ghProfile = 'https://github.com/BinaryWorlds';
  return (
    <S.Header>
      <S.Section>
        <ButtonIcon
          size={41}
          link={ghProfile}
          iconSrc={githubIcon}
          ariaLabel="github"
        />
        <ButtonLang />
      </S.Section>
      <Menu section={section} />
    </S.Header>
  );
}

export default Header;
