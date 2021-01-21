import React, { useEffect, useRef } from 'react';
import { g } from '../../assets/jawbreaker/jawbreaker';
import { StyledCanvas } from './CanvasArea.style';

function CanvasArea({ handleAnimateButton, getRef, position, isFullScreen }) {
  const canvasRef = useRef();

  useEffect(() => {
    g.canvas = canvasRef.current;
    g.ctx = g.canvas.getContext('2d');
    getRef(canvasRef);
  }, []);

  return (
    <StyledCanvas
      ref={canvasRef}
      onClick={handleAnimateButton}
      position={position}
      isFullScreen={isFullScreen}
    />
  );
}

export default CanvasArea;
