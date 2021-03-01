import React from 'react';
import useLang from '../../../hooks/useLang';
import image from '../../../assets/images/mockup';
import { description } from './Portfolio.text';
import generateList from '../../../utils/generateSpanList';
import usePortfolioLogic from './Portfolio.logic';
import * as S from './Portfolio.style';
import useGA from '../../../hooks/useGA';

function Portfolio() {
  useGA('Portfolio');

  const { lang, isEn } = useLang();
  const { isWritten, titleRef } = usePortfolioLogic(lang);

  return (
    <S.Wrapper id="3">
      <S.Image
        image={image}
        alt={isEn ? 'Mockup from AdobeXd' : 'Mockup w AdobeXd'}
      >
        <S.Title isEn={isEn} ref={titleRef} isWritten={isWritten} />
      </S.Image>

      <S.Description>{generateList(description[lang])}</S.Description>
      <S.Background />
    </S.Wrapper>
  );
}

export default Portfolio;
