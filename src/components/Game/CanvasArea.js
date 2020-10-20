import React, { useEffect, useRef } from 'react';
import { g } from '../../assets/jawbreaker/jawbreaker';
import { StyledWrapper, StyledCanvas } from './CanvasArea.style';

function CanvasArea({ handleAnimateButton }) {
  const canvasRef = useRef();

  useEffect(() => {
    g.canvas = canvasRef.current;
    g.ctx = g.canvas.getContext('2d');
  }, []);

  return (
    <StyledWrapper>
      <StyledCanvas ref={canvasRef} onClick={handleAnimateButton} />
    </StyledWrapper>
  );
}

export default CanvasArea;
