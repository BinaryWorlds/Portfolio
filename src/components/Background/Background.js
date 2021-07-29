import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import * as S from './Background.style';

function Background({ imageL, imageP, alt, className }) {
  const [imageUrl, setImageUrl] = useState(null);
  const componentRef = useRef();

  const copyUrl = () => {
    const url = componentRef.current.currentSrc;
    setImageUrl(url);
  };

  const getSource = (image, isPortrait = false) => {
    const { src, sizes, altFormat } = image;

    const path = (size, format) => `${src}_${size}w.${format} ${size}w`;
    const srcSet = (format) => sizes.map((size) => path(size, format)).join(',');
    const media = isPortrait ? '(orientation: portrait)' : '(orientation: landscape)';

    return (
      <>
        <source type="image/webp" srcSet={srcSet('webp')} media={media} />
        <source type={`image/${altFormat}`} srcSet={srcSet(altFormat)} media={media} />
      </>
    );
  };

  const { src, altFormat } = imageL;
  const imgSrc = `${src}.${altFormat}`;

  return (
    <S.Container url={imageUrl} className={className}>
      <S.Image>
        {getSource(imageL)}
        {imageP && getSource(imageP, true)}

        <img onLoad={copyUrl} ref={componentRef} src={imgSrc} alt={alt} />
      </S.Image>
    </S.Container>
  );
}

const imageProps = PropTypes.shape({
  src: PropTypes.string,
  sizes: PropTypes.arrayOf(PropTypes.number),
  altFormat: PropTypes.string,
});

Background.propTypes = {
  className: PropTypes.string.isRequired,
  imageL: imageProps.isRequired,
  imageP: imageProps,
  alt: PropTypes.string.isRequired,
};

Background.defaultProps = {
  imageP: null,
};

export default Background;
