import React, { useEffect, useState, useRef } from 'react';
import useLang from '../../hooks/useLang';
import CanvasArea from './CanvasArea';
import Settings from './Settings';
import ButtonsSection from './ButtonsSection';

import { StyledWrapper } from './Game.style';

import {
  changeLang,
  newGame,
  resetGame,
  startSymulate,
  stopSymulate,
  updateBallSize,
  g,
} from '../../assets/jawbreaker/jawbreaker';

import { openFullScreen, closeFullScreen } from '../../utils/fullScreen';

function Game() {
  const { lang, isPl } = useLang();

  const [gameMode, setGameMode] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isSettingsActive, setIsSettingsActive] = useState(false);
  const [animateButton, setAnimateButton] = useState(false);

  const checkGameSize = () => {
    const width = window.innerWidth;
    if (width > 2000) return 2;
    if (width > 1300) return 1;
    return 0;
  };

  const [gameSize, setGameSize] = useState(checkGameSize);
  const updateGameSize = () => setGameSize(checkGameSize);

  const handleAnimate = () => {
    if (animateButton || gameMode) return;
    setAnimateButton(true);
  };

  const canvasSetPositionRef = useRef(null);
  const sectionSetPositionRef = useRef(null);

  const getRefC = (ref) => (canvasSetPositionRef.current = ref);
  const getRefS = (ref) => (sectionSetPositionRef.current = ref);

  const setPositions = () => {
    if (canvasSetPositionRef.current) canvasSetPositionRef.current();
    if (sectionSetPositionRef.current) sectionSetPositionRef.current();
  };

  const getParams = (size) => {
    const ball = size === 2 ? 60 : 40;
    const r = size !== 0 ? 12 : 9;
    const c = size !== 0 ? 15 : 12;
    return [r, c, 5, ball];
  };

  const checkIsDifferent = (r, c, k) =>
    r !== g.rowsInit || c !== g.columnsInit || k !== g.colorsInit;

  const initGame = (size = 0, mode = false) => {
    const [r, c, k, s] = getParams(size);
    const check = checkIsDifferent(r, c, k);
    if (!check) {
      updateBallSize(s);
      return;
    }
    stopSymulate();
    newGame(r, c, k, s);
    if (!mode) startSymulate();
  };

  const onSettingsClick = () => setIsSettingsActive(!isSettingsActive);

  const onPlayClick = () => {
    if (gameMode === false) stopSymulate();
    resetGame();
    setGameMode(true);
  };

  const onFullScreenClick = () => {
    setIsFullScreen(!isFullScreen);
    if (isFullScreen) {
      setIsSettingsActive(false);
      initGame(gameSize, gameMode);
      closeFullScreen();
    } else openFullScreen();
  };

  useEffect(() => {
    changeLang(lang);
  }, [lang]);

  useEffect(() => {
    if (isFullScreen) return;
    initGame(gameSize, gameMode);
  }, [gameSize]);

  useEffect(() => {
    window.addEventListener('resize', updateGameSize);
    window.addEventListener('resize', setPositions);
    return () => {
      window.removeEventListener('resize', updateGameSize);
      window.removeEventListener('resize', setPositions);
      stopSymulate();
      g.columnsInit = 0;
    };
  }, []);

  return (
    <StyledWrapper isFullScreen={isFullScreen}>
      {isFullScreen && (
        <Settings
          isActive={isSettingsActive}
          isPl={isPl}
          gameMode={gameMode}
          gameSize={gameSize}
          getParams={getParams}
          setPositions={setPositions}
        />
      )}
      <ButtonsSection
        gameMode={gameMode}
        isPl={isPl}
        animateButton={animateButton}
        isFullScreen={isFullScreen}
        setAnimateButton={setAnimateButton}
        onFullScreenClick={onFullScreenClick}
        onSettingsClick={onSettingsClick}
        onPlayClick={onPlayClick}
        getRefS={getRefS}
      />
      <CanvasArea
        handleAnimate={handleAnimate}
        isFullScreen={isFullScreen}
        getRefC={getRefC}
      />
    </StyledWrapper>
  );
}

export default Game;
