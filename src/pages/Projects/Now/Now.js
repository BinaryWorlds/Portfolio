import React from 'react';
import { useStore } from '../../../globalState/store';
import image from '../../../assets/images/now.png';
import { title, description } from './Now.text';
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

  const generateList = (object) =>
    object.map((item) => <span key={item}>{item}</span>);

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
