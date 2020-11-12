import React from 'react';
import useUnmountAnimations from '../../../hooks/useHandleAnimations';
import image from '../../../assets/images/now.webp';
import { title, description } from './Now.text';
import generateList from '../../../utils/generateSpanList';
import {
  StyledImage,
  StyledImageContainer,
  StyledText,
  StyledTitle,
  StyledWrapper,
} from './Now.style';

function Now() {
  const { isPageUnmounted, setUnmounted, lang } = useUnmountAnimations();
  const isPl = lang === 'pl';

  return (
    <StyledWrapper isUnmounted={isPageUnmounted} onAnimationEnd={setUnmounted}>
      <StyledTitle>{title[lang]}</StyledTitle>
      <StyledImageContainer>
        <StyledImage
          src={image}
          alt={isPl ? 'Zrzut ekranu z panelu HMI' : 'Screenshot from HMI panel'}
        />
      </StyledImageContainer>
      <StyledText>{generateList(description[lang])}</StyledText>
    </StyledWrapper>
  );
}

export default Now;
