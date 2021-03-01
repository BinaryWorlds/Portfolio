import React, { useState, useEffect, useRef } from 'react';
import ButtonFullScreen from '../ButtonFullScreen/ButtonFullScreen';

import * as S from './ButtonsSection.style';

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
    <S.Section
      ref={sectionRef}
      position={sectionPosition}
      isFullScreen={isFullScreen}
    >
      <S.ButtonSettings onClick={onSettingsClick} isFullScreen={isFullScreen}>
        {isPl ? 'Ustawienia' : 'Settings'}
      </S.ButtonSettings>
      <S.ButtonPlay
        onClick={onPlayClick}
        animate={animateButton}
        onAnimationEnd={() => setAnimateButton(false)}
      >
        {gameMode ? 'Reset!' : playTxt}
      </S.ButtonPlay>
      <ButtonFullScreen
        onClick={onFullScreenClick}
        isFullScreen={isFullScreen}
      />
      <S.Hint isHintShow={isHintShow}>
        {isPl ? 'Kliknij Zagraj' : 'Click Play'}
      </S.Hint>
    </S.Section>
  );
}

export default ButtonsSection;
