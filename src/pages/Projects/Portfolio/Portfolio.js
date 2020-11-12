import React from 'react';
import useUnmountAnimations from '../../../hooks/useHandleAnimations';
import image from '../../../assets/images/mockup.webp';
import { title, description } from './Portfolio.text';
import generateList from '../../../utils/generateSpanList';

import {
  StyledWrapper,
  StyledImageWrapper,
  StyledImage,
  StyledTitle,
  StyledDescription,
  StyledBackground,
} from './Portfolio.style';

function Portfolio() {
  const { isPageUnmounted, setUnmounted, lang } = useUnmountAnimations();
  const isPl = lang === 'pl';

  return (
    <StyledWrapper isUnmounted={isPageUnmounted} onAnimationEnd={setUnmounted}>
      <StyledImageWrapper>
        <StyledImage
          src={image}
          alt={isPl ? 'Mockup w AdobeXd' : 'Mockup from AdobeXd'}
        />
        <StyledTitle>{title[lang]}</StyledTitle>
      </StyledImageWrapper>
      <StyledDescription isUnmounted={isPageUnmounted}>
        {generateList(description[lang])}
      </StyledDescription>
      <StyledBackground isUnmounted={isPageUnmounted} />
    </StyledWrapper>
  );
}

export default Portfolio;
