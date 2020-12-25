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
  const [gameSize, setGameSize] = useState(null);
  const [animateButton, setAnimateButton] = useState(false);

  const {
    state: { lang },
  } = useStore();

  const checkGameSize = () => {
    const width = window.innerWidth;
    if (width > 2000) setGameSize(2);
    else if (width > 1300) setGameSize(1);
    else setGameSize(0);
  };

  const initGame = (size) => {
    stopSymulate();
    if (size === 2) newGame(12, 15, 5, 60);
    else if (size === 1) newGame(12, 15, 5, 40);
    else newGame(9, 12, 5, 40);
  };

  useEffect(() => {
    changeLang(lang);
  }, [lang]);

  useEffect(() => {
    checkGameSize();
    window.addEventListener('resize', checkGameSize);
    return () => window.removeEventListener('resize', checkGameSize);
  }, []);

  useEffect(() => {
    initGame(gameSize);
    if (!gameMode) startSymulate();

    return () => stopSymulate();
  }, [gameSize]);

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
