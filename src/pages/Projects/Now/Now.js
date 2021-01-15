import React from 'react';
import useLang from '../../../hooks/useLang';
import image from '../../../assets/images/now';
import { title, description } from './Now.text';
import generateList from '../../../utils/generateSpanList';
import {
  StyledImage,
  StyledText,
  StyledTitle,
  StyledWrapper,
} from './Now.style';

function Now() {
  const { lang } = useLang();
  const isPl = lang === 'pl';

  return (
    <StyledWrapper id="2">
      <StyledTitle>{title[lang]}</StyledTitle>
      <StyledImage
        image={image}
        alt={isPl ? 'Zrzut ekranu z panelu HMI' : 'Screenshot from HMI panel'}
      />
      <StyledText>{generateList(description[lang])}</StyledText>
    </StyledWrapper>
  );
}

export default Now;
