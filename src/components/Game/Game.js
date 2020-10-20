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
  const [gameMode, setGameMode] = useState(false);
  const [animateButton, setAnimateButton] = useState(false);

  useEffect(() => {
    newGame(9, 12, 5, 40);
    startSymulate();
    return () => {
      stopSymulate();
    };
  }, []);

  const onButtonClick = () => {
    if (gameMode === false) stopSymulate();
    resetGame();
    setGameMode(true);
  };

  const handleAnimateButton = () => {
    if (animateButton || gameMode) return;
    setAnimateButton(true);
  };

  return (
    <StyledWrapper>
      <StyledButton
        onClick={onButtonClick}
        animate={animateButton}
        onAnimationEnd={() => setAnimateButton(false)}
      >
        {gameMode ? 'Reset!' : 'Zagraj!'}
      </StyledButton>
      <CanvasArea handleAnimateButton={handleAnimateButton} />
    </StyledWrapper>
  );
}

export default Game;
