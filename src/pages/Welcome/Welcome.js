import React from 'react';
import * as S from './Welcome.style';
import Button1 from '../../components/Button1/Button1';
import Game from '../../components/Game/Game';
import image from '../../assets/images/avatar_demo';
import { useStore } from '../../globalState/store';
import { ANIMATE_MEET_ME, SET_PAGE } from '../../globalState/actionTypes';
import useGA from '../../hooks/useGA';
import useHint from '../../hooks/useHint';

function Welcome() {
  useGA('Welcome');
  const { isHintShow, handleHint } = useHint(2);

  const {
    state: { animateMeetMe, lang, isMobile },
    dispatch,
  } = useStore();

  const onAnimationEnd = () => {
    dispatch({ type: ANIMATE_MEET_ME, payload: false });
    handleHint();
  };

  const handleClick = () => {
    if (isMobile) window.scrollTo(0, window.innerHeight);
    else dispatch({ type: SET_PAGE, payload: 1 });
  };

  const isEn = lang === 'en';

  return (
    <S.Wrapper id="0">
      <S.Hello>
        <S.Image
          image={image}
          alt={isEn ? 'A picture of me. Hi!' : 'Cześć! To ja!'}
        />
        <S.MeetMe>
          <S.Text>
            Szymkowiak Dawid <br /> Junior Front-end Developer
          </S.Text>
          <Button1
            onClick={handleClick}
            onAnimationEnd={onAnimationEnd}
            animate={animateMeetMe}
            text={isEn ? 'Meet me' : 'Poznaj mnie'}
          />
          <S.Hint isHintShow={isHintShow}>
            {isEn ? 'Click here!' : 'Kliknij tu!'}
          </S.Hint>
        </S.MeetMe>
      </S.Hello>
      {!isMobile && <Game />}
    </S.Wrapper>
  );
}

export default Welcome;
