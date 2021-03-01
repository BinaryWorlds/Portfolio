import React from 'react';
import useLang from '../../../hooks/useLang';
import * as S from './MyProduct.style';
import { title, description } from './MyProduct.text';
import generateList from '../../../utils/generateSpanList';
import Button2 from '../../../components/Button2/Button2';
import image from '../../../assets/images/myProduct';
import useGA from '../../../hooks/useGA';

function MyProduct() {
  useGA('MyProduct');

  const { lang, isPl } = useLang();

  const myProductLink = 'https://climbingtimers.com/';

  return (
    <S.Wrapper id="8">
      <S.Wrapper2>
        <S.Border>
          <rect />
        </S.Border>
        <S.Section>
          <S.Title>{title[lang]}</S.Title>
          <S.Description>{generateList(description[lang])}</S.Description>
          <Button2 text="Live" link={myProductLink} />
        </S.Section>
        <S.Image
          image={image}
          alt={isPl ? 'Zegary Wspinaczkowe' : 'Climbing Timers'}
        />
      </S.Wrapper2>
    </S.Wrapper>
  );
}

export default MyProduct;
