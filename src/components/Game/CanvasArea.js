import React, { useState, useEffect, useRef } from 'react';
import { g } from '../../assets/jawbreaker/jawbreaker';
import { StyledCanvas } from './CanvasArea.style';

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
    const { innerWidth, innerHeight } = window;

    const goTop = (innerHeight - clientHeight) / 2 - offsetTop;
    const leftMargin = Math.floor((innerWidth - 2560) / 2);
    let goLeft = (innerWidth - clientWidth) / 2 - offsetLeft;
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
    <StyledCanvas
      ref={canvasRef}
      onClick={handleAnimate}
      position={canvasPosition}
      isFullScreen={isFullScreen}
    />
  );
}

export default CanvasArea;
