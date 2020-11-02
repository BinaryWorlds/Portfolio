import React from 'react';
import { useStore } from '../../../globalState/store';
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
  const {
    state: { lang },
  } = useStore();

  return (
    <StyledWrapper>
      <StyledImageWrapper>
        <StyledImage src={image} />
        <StyledTitle>{title[lang]}</StyledTitle>
      </StyledImageWrapper>
      <StyledDescription>{generateList(description[lang])}</StyledDescription>
      <StyledBackground />
    </StyledWrapper>
  );
}

export default Portfolio;
