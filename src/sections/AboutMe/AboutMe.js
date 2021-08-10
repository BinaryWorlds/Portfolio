import React from 'react';
import * as S from './AboutMe.style';
import { text } from './AboutMe.text';
import image from '../../assets/images/hedgehog';

function AboutMe() {
  const images = [{ image }];

  return (
    <S.Wrapper>
      <S.Title>O mnie</S.Title>
      <S.Card>
        <S.Text>{text}</S.Text>
      </S.Card>
      <S.Background images={images} alt="Frontend-developer-portfolio-hedgehog" />
    </S.Wrapper>
  );
}

export default AboutMe;
