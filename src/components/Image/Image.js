import React from 'react';
import { StyledWrapper, StyledContainer, StyledImage } from './Image.style';

function Image({ src, alt, width = 1, height = 1, className, children }) {
  const ratio = Math.floor((height * 1000) / width) / 10;

  return (
    <StyledWrapper className={className}>
      <StyledContainer ratio={ratio}>
        <StyledImage src={src} alt={alt} />
      </StyledContainer>
      {children}
    </StyledWrapper>
  );
}

export default Image;
