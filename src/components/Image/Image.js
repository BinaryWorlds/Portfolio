import React, { useState, useEffect, useRef } from 'react';
import { StyledWrapper, StyledContainer, StyledImage } from './Image.style';

function Image({ image, alt, className, children }) {
  const { width, height, src, sizes, altFormat } = image;

  const [componentWidth, setComponentWidth] = useState(null);
  const componentRef = useRef();

  useEffect(() => {
    setComponentWidth(componentRef.current.offsetWidth);
  }, []);

  const ratio = Math.floor((height * 1000) / width) / 10;
  const path = (size, format) => `${src}_${size}w.${format} ${size}w`;
  const srcSet = (format) => sizes.map((size) => path(size, format)).join(',');

  return (
    <StyledWrapper ref={componentRef} className={className}>
      <StyledContainer ratio={ratio}>
        {componentWidth && (
          <StyledImage>
            <source
              type="image/webp"
              sizes={`${componentWidth}px`}
              srcSet={srcSet('webp')}
            />
            <source
              type={`image/${altFormat}`}
              sizes={`${componentWidth}px`}
              srcSet={srcSet(altFormat)}
            />
            <img src={`${src}.${altFormat}`} alt={alt} />
          </StyledImage>
        )}
      </StyledContainer>
      {children}
    </StyledWrapper>
  );
}

export default Image;
