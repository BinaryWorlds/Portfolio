import React from 'react';
import * as S from './Welcome.style';
import imageL from '../../assets/images/startLandscape';
import imageP from '../../assets/images/startPortrait';

function Welcome() {
  return (
    <S.Wrapper>
      <S.Card>
        <S.Text>Front-end Developer</S.Text>
        <S.Name>
          Szymkowiak
          <br /> Dawid
        </S.Name>
        <S.Text>Pozwól się zaskoczyć</S.Text>
      </S.Card>
      <S.Button>Projekty</S.Button>
      <S.Background imageL={imageL} imageP={imageP} alt="Frontend-developer-portfolio-background" />
    </S.Wrapper>
  );
}

export default Welcome;
