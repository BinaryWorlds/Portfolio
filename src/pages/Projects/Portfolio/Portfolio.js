import React from 'react';
import useHandleAnimations from '../../../hooks/useHandleAnimations';
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
  const { isPageMounted, handleUnmount, lang } = useHandleAnimations();
  const isPl = lang === 'pl';

  return (
    <StyledWrapper isMounted={isPageMounted} onAnimationEnd={handleUnmount}>
      <StyledImageWrapper>
        <StyledImage
          src={image}
          alt={isPl ? 'Mockup w AdobeXd' : 'Mockup from AdobeXd'}
        />
        <StyledTitle>{title[lang]}</StyledTitle>
      </StyledImageWrapper>
      <StyledDescription isMounted={isPageMounted}>
        {generateList(description[lang])}
      </StyledDescription>
      <StyledBackground isMounted={isPageMounted} />
    </StyledWrapper>
  );
}

export default Portfolio;
