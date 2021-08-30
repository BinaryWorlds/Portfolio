import React from 'react';
import * as S from './Welcome.style';
import imageL from '../../assets/images/startLandscape';
import imageP from '../../assets/images/startPortrait';

import { sectionsId } from '../../View/siteStructure';

function Welcome() {
  const images = [
    { image: imageL, media: '(orientation: landscape)' },
    { image: imageP, media: '(orientation: portrait)' },
  ];

  const handleClick = () => {};

  return (
    <S.Wrapper id={sectionsId.start}>
      <S.Card>
        <S.Text>Front-end Developer</S.Text>
        <S.Name>
          Szymkowiak
          <br /> Dawid
        </S.Name>
        <S.Text>Pozwól się zaskoczyć</S.Text>
      </S.Card>
      <S.Button onClick={handleClick}>Projekty</S.Button>
      <S.Background images={images} alt="Frontend-developer-portfolio-background" />
    </S.Wrapper>
  );
}

export default Welcome;
