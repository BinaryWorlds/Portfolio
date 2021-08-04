import React, { useLayoutEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import * as S from './SvgText.style';

const filterId = 'outline';
const borderWidth = 4;

function SvgText({ text }) {
  const textRef = useRef();
  const [size, setSize] = useState({ height: 0, width: 0 });

  const updateSize = () => {
    const { height, width } = textRef.current.getBoundingClientRect();
    setSize({ height: height + borderWidth * 2, width: width + borderWidth * 2 });
  };

  useLayoutEffect(() => {
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <S.Svg x="0" y="0" width={size.width} height={size.height}>
      <S.Text ref={textRef} x="50%" y="50%" filter={`url(#${filterId})`}>
        {text}
      </S.Text>
    </S.Svg>
  );
}

export const strokeFilter = (
  <S.FilterSvg>
    <filter id={filterId}>
      <feMorphology in="SourceAlpha" result="DILATED" operator="dilate" radius={borderWidth} />
      <feFlood floodColor="rgba(0,0,0,0.25)" floodOpacity="1" result="ABC" />
      <feComposite in="ABC" in2="DILATED" operator="in" result="OUTLINE" />

      <feMerge>
        <feMergeNode in="OUTLINE" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </S.FilterSvg>
);

SvgText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SvgText;
