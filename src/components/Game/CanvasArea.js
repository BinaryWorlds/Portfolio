import React, { useEffect, useRef } from 'react';
import { g } from '../../assets/jawbreaker/jawbreaker';

function CanvasArea() {
  let canvasRef = useRef();

  useEffect(() => {
    g.canvas = canvasRef.current;
    g.ctx = g.canvas.getContext('2d');
  }, []);

  return (
    <canvas ref={canvasRef} style={{ width: g.width, height: g.height }} />
  );
}

export default CanvasArea;
