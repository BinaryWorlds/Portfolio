import React from 'react';
import { useStore } from '../../../globalState/store';
import image from '../../../assets/images/now.png';
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
  const {
    state: { lang },
  } = useStore();

  return (
    <StyledWrapper>
      <StyledTitle>{title[lang]}</StyledTitle>
      <StyledImageContainer>
        <StyledImage src={image} />
      </StyledImageContainer>
      <StyledText>{generateList(description[lang])}</StyledText>
    </StyledWrapper>
  );
}

export default Now;
