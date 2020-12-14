import React from 'react';
import {
  StyledWrapper,
  StyledHello,
  StyledImage,
  StyledText,
} from './Welcome.style';
import Button1 from '../../components/Button1/Button1';
import Game from '../../components/Game/Game';
import image from '../../assets/images/avatar_demo.webp';
import { useStore } from '../../globalState/store';
import { ANIMATE_MEET_ME, SET_PAGE } from '../../globalState/actionTypes';
import useUnmountAnimations from '../../hooks/useHandleAnimations';

function Welcome() {
  const {
    state: { animateMeetMe, lang, isMobile },
    dispatch,
  } = useStore();

  const onAnimationEnd = () =>
    dispatch({ type: ANIMATE_MEET_ME, payload: false });

  const handleClick = () => dispatch({ type: SET_PAGE, payload: 1 });

  const { setUnmounted } = useUnmountAnimations();
  const isEn = lang === 'en';

  return (
    <StyledWrapper onAnimationEnd={setUnmounted}>
      <StyledHello>
        <StyledImage
          src={image}
          alt={isEn ? 'A picture of me. Hi!' : 'Cześć! To ja!'}
          width={1080}
          height={1350}
        />
        <StyledText>
          Szymkowiak Dawid <br /> Junior Frontend Developer
        </StyledText>
        <Button1
          onClick={handleClick}
          onAnimationEnd={onAnimationEnd}
          animate={animateMeetMe}
          text={lang === 'pl' ? 'Poznaj mnie' : 'Meet me'}
        />
      </StyledHello>
      {!isMobile && <Game />}
    </StyledWrapper>
  );
}

export default Welcome;
