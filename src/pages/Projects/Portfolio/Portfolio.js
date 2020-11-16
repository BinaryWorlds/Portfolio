import React from 'react';
import useUnmountAnimations from '../../../hooks/useHandleAnimations';
import image from '../../../assets/images/mockup.webp';
import { description } from './Portfolio.text';
import generateList from '../../../utils/generateSpanList';
import usePortfolioLogic from './Portfolio.logic';
import {
  StyledWrapper,
  StyledImageWrapper,
  StyledImage,
  StyledTitle,
  StyledDescription,
  StyledBackground,
} from './Portfolio.style';

function Portfolio() {
  const { setUnmounted, lang } = useUnmountAnimations();
  const { isWritten, titleRef } = usePortfolioLogic(lang);

  const isEn = lang === 'en';

  return (
    <StyledWrapper onAnimationEnd={setUnmounted}>
      <StyledImageWrapper>
        <StyledImage
          src={image}
          alt={isEn ? 'Mockup w AdobeXd' : 'Mockup from AdobeXd'}
        />
        <StyledTitle isEn={isEn} ref={titleRef} isWritten={isWritten} />
      </StyledImageWrapper>
      <StyledDescription>{generateList(description[lang])}</StyledDescription>
      <StyledBackground />
    </StyledWrapper>
  );
}

export default Portfolio;
