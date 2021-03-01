import React from 'react';
import useLang from '../../../hooks/useLang';
import image from '../../../assets/images/now';
import { title, description } from './Now.text';
import generateList from '../../../utils/generateSpanList';
import * as S from './Now.style';
import useGA from '../../../hooks/useGA';

function Now() {
  useGA('Now');

  const { lang, isPl } = useLang();

  return (
    <S.Wrapper id="2">
      <S.Title>{title[lang]}</S.Title>
      <S.Image
        image={image}
        alt={isPl ? 'Zrzut ekranu z panelu HMI' : 'Screenshot from HMI panel'}
      />
      <S.Text>{generateList(description[lang])}</S.Text>
    </S.Wrapper>
  );
}

export default Now;
