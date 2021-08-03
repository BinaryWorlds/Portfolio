import React, { useLayoutEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import * as S from './SvgText.style';

function SvgText({ text }) {
  const textRef = useRef();
  const [size, setSize] = useState({ height: 0, width: 0 });

  useLayoutEffect(() => {
    const { height, width } = textRef.current.getBoundingClientRect();
    setSize({ height, width });
  }, []);

  return (
    <S.Svg x="0" y="0" width={size.width} height={size.height}>
      <S.Text ref={textRef} x="50%" y="50%" filter="url(#outline)">
        {text}
      </S.Text>

      <filter id="outline">
        <feMorphology in="SourceAlpha" result="DILATED" operator="dilate" radius="4" />

        <feFlood floodColor="black" floodOpacity="0.75" result="ABC" />
        <feComposite in="ABC" in2="DILATED" operator="in" result="OUTLINE" />

        <feMerge>
          <feMergeNode in="OUTLINE" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </S.Svg>
  );
}

SvgText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SvgText;
