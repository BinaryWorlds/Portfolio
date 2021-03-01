import React, { useState, useEffect, useRef } from 'react';
import * as S from './Image.style';

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
    <S.Wrapper ref={componentRef} className={className}>
      <S.Container ratio={ratio}>
        {componentWidth && (
          <S.Image>
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
          </S.Image>
        )}
      </S.Container>
      {children}
    </S.Wrapper>
  );
}

export default Image;
