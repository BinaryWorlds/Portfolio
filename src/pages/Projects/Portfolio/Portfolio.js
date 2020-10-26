import React from 'react';
import image from '../../../assets/images/mockup.png';

import {
  StyledWrapper,
  StyledTitle,
  StyledDescription,
  StyledImage,
  StyledImageWrapper,
} from './Portfolio.style';

function Portfolio() {
  return (
    <StyledWrapper>
      <StyledImageWrapper>
        <StyledImage src={image} />
      </StyledImageWrapper>
      <StyledTitle>Portfolio</StyledTitle>
      <StyledDescription />
    </StyledWrapper>
  );
}

export default Portfolio;
