import React, { useEffect } from 'react';
import CanvasArea from './CanvasArea';
import { newGame } from '../../assets/jawbreaker/jawbreaker';

function Game() {
  useEffect(() => {
    newGame(9, 12, 5, 40);
  }, []);

  return (
    <>
      <CanvasArea />
    </>
  );
}

export default Game;
