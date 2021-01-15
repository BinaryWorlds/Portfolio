import React from 'react';
import useLang from '../../../hooks/useLang';
import image from '../../../assets/images/mockup';
import { description } from './Portfolio.text';
import generateList from '../../../utils/generateSpanList';
import usePortfolioLogic from './Portfolio.logic';
import {
  StyledWrapper,
  StyledImage,
  StyledTitle,
  StyledDescription,
  StyledBackground,
} from './Portfolio.style';

function Portfolio() {
  const { lang } = useLang();
  const { isWritten, titleRef } = usePortfolioLogic(lang);

  const isEn = lang === 'en';

  return (
    <StyledWrapper id="3">
      <StyledImage
        image={image}
        alt={isEn ? 'Mockup from AdobeXd' : 'Mockup w AdobeXd'}
      >
        <StyledTitle isEn={isEn} ref={titleRef} isWritten={isWritten} />
      </StyledImage>

      <StyledDescription>{generateList(description[lang])}</StyledDescription>
      <StyledBackground />
    </StyledWrapper>
  );
}

export default Portfolio;
