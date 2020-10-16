import React, { useEffect, useState } from 'react';
import { StyledWrapper, StyledButton } from './Game.style';
import CanvasArea from './CanvasArea';
import {
  newGame,
  resetGame,
  startSymulate,
  stopSymulate,
} from '../../assets/jawbreaker/jawbreaker';

function Game() {
  useEffect(() => {
    newGame(9, 12, 5, 40);
    startSymulate();
  }, []);

  const [gameMode, setGameMode] = useState(false);
  const [buttonText, setButtonText] = useState('Zagraj!');

  function onButtonClick() {
    if (gameMode === false) stopSymulate();
    resetGame();
    setGameMode(true);
    setButtonText('Reset!');
  }

  return (
    <StyledWrapper>
      <StyledButton onClick={onButtonClick}>{buttonText}</StyledButton>
      <CanvasArea />
    </StyledWrapper>
  );
}

export default Game;
