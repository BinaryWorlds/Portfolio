import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as S from './Background.style';

function Background({ images, alt, className, afterLoad }) {
  const [imageUrl, setImageUrl] = useState(null);
  const componentRef = useRef();

  const copyUrl = () => {
    const url = componentRef.current.currentSrc;
    setImageUrl(url);
  };

  useEffect(() => {
    if (!imageUrl) return;
    afterLoad();
  }, [imageUrl]);

  const genSource = ({ image, media }, i) => {
    const { src, sizes, altFormat } = image;
    const path = (size, format) => `${src}_${size}w.${format} ${size}w`;
    const srcSet = (format) => sizes.map((size) => path(size, format)).join(',');

    return (
      <React.Fragment key={src + media + i}>
        <source type="image/webp" srcSet={srcSet('webp')} media={media} />
        <source type={`image/${altFormat}`} srcSet={srcSet(altFormat)} media={media} />
      </React.Fragment>
    );
  };

  const sources = images.map((el, i) => genSource(el, i));

  const { src, altFormat } = images[0].image;
  const imgSrc = src ? `${src}.${altFormat}` : '';

  return (
    <S.Container url={imageUrl} className={className}>
      <S.Image>
        {sources}
        <img onLoad={copyUrl} onError={afterLoad} ref={componentRef} src={imgSrc} alt={alt} />
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
  alt: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.exact({
      image: imageProps,
      media: PropTypes.string,
    }),
  ).isRequired,
  afterLoad: PropTypes.func,
};

Background.defaultProps = {
  afterLoad: () => {},
};

export default Background;
