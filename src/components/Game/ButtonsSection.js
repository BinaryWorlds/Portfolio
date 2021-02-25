import React, { useState, useEffect, useRef } from 'react';
import ButtonFullScreen from '../ButtonFullScreen/ButtonFullScreen';

import {
  StyledSection,
  StyledButtonSettings,
  StyledButtonPlay,
  StyledHint,
} from './ButtonsSection.style';

function ButtonsSection({
  getRefS,
  isPl,
  gameMode,
  isFullScreen,
  isHintShow,
  onFullScreenClick,
  onSettingsClick,
  onPlayClick,
  animateButton,
  setAnimateButton,
}) {
  const sectionRef = useRef(null);

  const [sectionPosition, setSectionPosition] = useState({
    goTop: 0,
    goRight: 0,
  });

  const calcSectionPosition = () => {
    if (!sectionRef.current) return;

    const { offsetTop, offsetLeft, clientWidth } = sectionRef.current;
    const { innerWidth } = window;

    const goTop = (offsetTop - 20) * -1;
    let goRight = innerWidth - offsetLeft - clientWidth - 20;
    const leftMargin = Math.floor((innerWidth - 2560) / 2);
    if (leftMargin > 0) goRight -= leftMargin;

    setSectionPosition({ goTop, goRight });
  };

  useEffect(() => {
    getRefS(calcSectionPosition);
    return () => getRefS(null);
  }, []);

  const playTxt = isPl ? 'Zagraj!' : 'Play!';

  return (
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
      <StyledHint isHintShow={isHintShow}>
        {isPl ? 'Kliknij Zagraj' : 'Click Play'}
      </StyledHint>
    </StyledSection>
  );
}

export default ButtonsSection;
