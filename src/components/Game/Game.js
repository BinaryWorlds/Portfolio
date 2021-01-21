import React, { useEffect, useState, useRef } from 'react';
import { useStore } from '../../globalState/store';
import CanvasArea from './CanvasArea';
import ButtonFullScreen from '../ButtonFullScreen/ButtonFullScreen';
import {
  StyledWrapper,
  StyledSection,
  StyledButtonSettings,
  StyledButtonPlay,
  StyledSettings,
} from './Game.style';
import {
  changeLang,
  newGame,
  resetGame,
  startSymulate,
  stopSymulate,
} from '../../assets/jawbreaker/jawbreaker';
import { openFullScreen, closeFullScreen } from '../../utils/fullScreen';

function Game() {
  const [gameMode, setGameMode] = useState(false);
  const [gameSize, setGameSize] = useState(null);
  const [animateButton, setAnimateButton] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isSettingsActive, setIsSettingsActive] = useState(false);

  const [sectionPosition, setSectionPosition] = useState({
    goTop: null,
    goRight: null,
  });

  const [canvasPosition, setCanvasPosition] = useState({
    goTop: null,
    goLeft: null,
  });

  const {
    state: { lang },
  } = useStore();

  const isPl = lang === 'pl';

  const sectionRef = useRef();
  const canvasRef = useRef(null);

  const getRef = (ref) => (canvasRef.current = ref.current);

  const calcSectionPosition = () => {
    if (!sectionRef.current) return;
    const { offsetTop, offsetLeft, clientWidth } = sectionRef.current;
    const { innerWidth } = window;

    const goTop = (offsetTop - 20) * -1;
    const goRight = innerWidth - offsetLeft - clientWidth - 20;
    setSectionPosition({ goTop, goRight });
  };

  const calcCanvasPosition = () => {
    if (!canvasRef.current) return;
    const {
      offsetTop,
      offsetLeft,
      clientWidth,
      clientHeight,
    } = canvasRef.current;
    const { innerWidth, innerHeight } = window;

    const goTop = (innerHeight - clientHeight) / 2 - offsetTop;
    const goLeft = (innerWidth - clientWidth) / 2 - offsetLeft;
    setCanvasPosition({ goTop, goLeft });
  };

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
    calcCanvasPosition();
    calcSectionPosition();

    return () => stopSymulate();
  }, [gameSize]);

  const onPlayClick = () => {
    if (gameMode === false) stopSymulate();
    resetGame();
    setGameMode(true);
  };

  const handleAnimateButton = () => {
    if (animateButton || gameMode) return;
    setAnimateButton(true);
  };

  const onFullScreenClick = () => {
    setIsFullScreen(!isFullScreen);
    if (isFullScreen) {
      closeFullScreen();
      setIsSettingsActive(false);
      return;
    }
    openFullScreen();
    calcCanvasPosition();
    calcSectionPosition();
  };

  useEffect(() => {
    window.addEventListener('resize', calcCanvasPosition);
    window.addEventListener('resize', calcSectionPosition);
    return () => {
      window.removeEventListener('resize', calcCanvasPosition);
      window.removeEventListener('resize', calcSectionPosition);
    };
  }, []);

  const onSettingsClick = () => setIsSettingsActive(!isSettingsActive);

  const playTxt = isPl ? 'Zagraj!' : 'Play!';

  return (
    <StyledWrapper isFullScreen={isFullScreen}>
      <StyledSettings isActive={isSettingsActive} />
      <StyledSection
        ref={sectionRef}
        position={sectionPosition}
        isFullScreen={isFullScreen}
      >
        <StyledButtonSettings
          onClick={onSettingsClick}
          isFullScreen={isFullScreen}
        >
          {isPl ? 'Ustawienia' : 'Settings'}
        </StyledButtonSettings>
        <StyledButtonPlay
          onClick={onPlayClick}
          animate={animateButton}
          onAnimationEnd={() => setAnimateButton(false)}
        >
          {gameMode ? 'Reset!' : playTxt}
        </StyledButtonPlay>
        <ButtonFullScreen
          onClick={onFullScreenClick}
          isFullScreen={isFullScreen}
        />
      </StyledSection>
      <CanvasArea
        handleAnimateButton={handleAnimateButton}
        getRef={getRef}
        position={canvasPosition}
        isFullScreen={isFullScreen}
      />
    </StyledWrapper>
  );
}

export default Game;
