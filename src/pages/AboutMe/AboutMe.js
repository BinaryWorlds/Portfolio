import React from 'react';
import useLang from '../../hooks/useLang';
import generateList from '../../utils/generateSpanList';
import * as S from './AboutMe.style';
import {
  title,
  description,
  frontendTxt,
  backendTxt,
  designTxt,
} from './AboutMe.text';
import useGA from '../../hooks/useGA';

function AboutMe() {
  useGA('AboutMe');

  const { lang } = useLang();

  return (
    <S.Wrapper id="1">
      <S.Title>{title[lang]}</S.Title>
      <S.Text>{description[lang]}</S.Text>
      <S.Table>
        <S.Column val={1}>{generateList(frontendTxt)}</S.Column>
        <S.Column val={2}>{generateList(backendTxt)}</S.Column>
        <S.Column val={3}>{generateList(designTxt)}</S.Column>
      </S.Table>
    </S.Wrapper>
  );
}

export default AboutMe;
