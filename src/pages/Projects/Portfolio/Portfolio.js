import React from 'react';
import useUnmountAnimations from '../../../hooks/useHandleAnimations';
import image from '../../../assets/images/mockup.webp';
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
  const { setUnmounted, lang } = useUnmountAnimations();
  const { isWritten, titleRef } = usePortfolioLogic(lang);

  const isEn = lang === 'en';

  return (
    <StyledWrapper id="3" onAnimationEnd={setUnmounted}>
      <StyledImage
        src={image}
        alt={isEn ? 'Mockup from AdobeXd' : 'Mockup w AdobeXd'}
        width={1460}
        height={918}
      >
        <StyledTitle isEn={isEn} ref={titleRef} isWritten={isWritten} />
      </StyledImage>

      <StyledDescription>{generateList(description[lang])}</StyledDescription>
      <StyledBackground />
    </StyledWrapper>
  );
}

export default Portfolio;
