import React from 'react';
import * as S from './AboutMe.style';
import { text } from './AboutMe.text';
import image from '../../assets/images/hedgehog';

import { sectionsId } from '../../View/siteStructure';

function AboutMe() {
  const images = [{ image }];

  return (
    <S.Wrapper id={sectionsId.aboutMe}>
      <S.Title>O mnie</S.Title>
      <S.Card>
        <S.Text>{text}</S.Text>
      </S.Card>
      <S.Container>
        <S.Background images={images} alt="Frontend-developer-portfolio-hedgehog" />
      </S.Container>
    </S.Wrapper>
  );
}

export default React.memo(AboutMe);
