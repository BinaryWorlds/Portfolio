import React from 'react';
import useUnmountAnimations from '../../../hooks/useHandleAnimations';
import {
  StyledWrapper,
  StyledWrapper2,
  StyledSection,
  StyledTitle,
  StyledDescription,
  StyledImageWrapper,
  StyledImage,
} from './MyProduct.style';
import { title, description } from './MyProduct.text';
import generateList from '../../../utils/generateSpanList';
import Button2 from '../../../components/Button2/Button2';
import image from '../../../assets/images/myProduct.webp';

function MyProduct() {
  const { isPageUnmounted, setUnmounted, lang } = useUnmountAnimations();

  const isPl = lang === 'pl';
  const myProductLink = 'https://climbingtimers.com/';

  return (
    <StyledWrapper isUnmounted={isPageUnmounted} onAnimationEnd={setUnmounted}>
      <StyledWrapper2>
        <StyledSection>
          <StyledTitle>{title[lang]}</StyledTitle>
          <StyledDescription>
            {generateList(description[lang])}
          </StyledDescription>
          <Button2 text="Live" link={myProductLink} />
        </StyledSection>
        <StyledImageWrapper>
          <StyledImage
            src={image}
            alt={isPl ? 'Zegary Wspinaczkowe' : 'Climbing Timers'}
          />
        </StyledImageWrapper>
      </StyledWrapper2>
    </StyledWrapper>
  );
}

export default MyProduct;
