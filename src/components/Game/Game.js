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

  const initGame = () => {
    const width = window.innerWidth;
    if (width > 2000) return newGame(12, 15, 5, 60);
    if (width > 1300) return newGame(12, 15, 5, 40);
    return newGame(9, 12, 5, 40);
  };

  useEffect(() => {
    changeLang(lang);
  }, [lang]);

  useEffect(() => {
    initGame();
    startSymulate();
    window.addEventListener('resize', initGame);

    return () => {
      stopSymulate();
      window.removeEventListener('resize', initGame);
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
