import React, { useEffect, useState } from 'react';
import { useStore } from '../../globalState/store';
import { StyledWrapper, StyledButton } from './Game.style';
import CanvasArea from './CanvasArea';
import {
  changeLang,
  newGame,
  resetGame,
  startSymulate,
  stopSymulate,
} from '../../assets/jawbreaker/jawbreaker';

function Game() {
  const [gameMode, setGameMode] = useState(false);
  const [animateButton, setAnimateButton] = useState(false);
  const {
    state: { lang },
  } = useStore();

  useEffect(() => {
    changeLang(lang);
  }, [lang]);

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

  const playTxt = lang === 'pl' ? 'Zagraj!' : 'Play!';

  return (
    <StyledWrapper>
      <StyledButton
        onClick={onButtonClick}
        animate={animateButton}
        onAnimationEnd={() => setAnimateButton(false)}
      >
        {gameMode ? 'Reset!' : playTxt}
      </StyledButton>
      <CanvasArea handleAnimateButton={handleAnimateButton} />
    </StyledWrapper>
  );
}

export default Game;
