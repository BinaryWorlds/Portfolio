import React from 'react';
import {
  StyledWrapper,
  StyledHello,
  StyledImage,
  StyledMeetMe,
  StyledText,
} from './Welcome.style';
import Button1 from '../../components/Button1/Button1';
import Game from '../../components/Game/Game';
import image from '../../assets/images/avatar_demo';
import { useStore } from '../../globalState/store';
import { ANIMATE_MEET_ME, SET_PAGE } from '../../globalState/actionTypes';
import useGA from '../../hooks/useGA';

function Welcome() {
  useGA('Welcome');
  const {
    state: { animateMeetMe, lang, isMobile },
    dispatch,
  } = useStore();

  const onAnimationEnd = () =>
    dispatch({ type: ANIMATE_MEET_ME, payload: false });

  const handleClick = () => {
    if (isMobile) window.scrollTo(0, window.innerHeight);
    else dispatch({ type: SET_PAGE, payload: 1 });
  };

  const isEn = lang === 'en';

  return (
    <StyledWrapper id="0">
      <StyledHello>
        <StyledImage
          image={image}
          alt={isEn ? 'A picture of me. Hi!' : 'Cześć! To ja!'}
        />
        <StyledMeetMe>
          <StyledText>
            Szymkowiak Dawid <br /> Junior Front-end Developer
          </StyledText>
          <Button1
            onClick={handleClick}
            onAnimationEnd={onAnimationEnd}
            animate={animateMeetMe}
            text={isEn ? 'Meet me' : 'Poznaj mnie'}
          />
        </StyledMeetMe>
      </StyledHello>
      {!isMobile && <Game />}
    </StyledWrapper>
  );
}

export default Welcome;
