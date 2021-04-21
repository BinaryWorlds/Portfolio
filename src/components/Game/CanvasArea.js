import React, { useState, useEffect, useRef } from 'react';
import { g } from '../../assets/jawbreaker/jawbreaker';
import * as S from './CanvasArea.style';

function CanvasArea({ getRefC, isFullScreen, handleAnimate }) {
  const canvasRef = useRef();

  const [canvasPosition, setCanvasPosition] = useState({
    goTop: 0,
    goLeft: 0,
  });

  const calcCanvasPosition = () => {
    if (!canvasRef.current) return;
    const {
      offsetTop,
      offsetLeft,
      clientWidth,
      clientHeight,
    } = canvasRef.current;

    const {
      clientWidth: docWidth,
      clientHeight: docHeight,
    } = document.documentElement;

    const goTop = (docHeight - clientHeight) / 2 - offsetTop;
    const leftMargin = Math.floor((docWidth - 2560) / 2);
    let goLeft = (docWidth - clientWidth) / 2 - offsetLeft;
    if (leftMargin > 0) goLeft -= leftMargin;
    setCanvasPosition({ goTop, goLeft });
  };

  useEffect(() => {
    g.canvas = canvasRef.current;
    g.ctx = g.canvas.getContext('2d');
    getRefC(calcCanvasPosition);
    return () => getRefC(null);
  }, []);

  return (
    <S.Canvas
      ref={canvasRef}
      onClick={handleAnimate}
      position={canvasPosition}
      isFullScreen={isFullScreen}
    />
  );
}

export default CanvasArea;
