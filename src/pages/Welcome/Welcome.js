import React from 'react';
import {
  StyledWrapper,
  StyledHello,
  StyledImage,
  StyledText,
} from './Welcome.style';
import Button1 from '../../components/Button1/Button1';
import Game from '../../components/Game/Game';
import { useStore } from '../../globalState/store';
import {
  ANIMATE_MEET_ME,
  SET_PAGE,
  SET_PAGE_UNMOUNTED,
} from '../../globalState/actionTypes';

function Welcome() {
  const { state, dispatch } = useStore();
  const { isPageMounted } = state;

  const onAnimationEnd = () =>
    dispatch({ type: ANIMATE_MEET_ME, payload: false });

  const handleClick = () => dispatch({ type: SET_PAGE, payload: 1 });
  const handleUnmount = () => {
    if (isPageMounted) dispatch({ type: SET_PAGE_UNMOUNTED });
  };

  return (
    <StyledWrapper onAnimationEnd={handleUnmount} isMount={isPageMounted}>
      <StyledHello>
        <StyledImage />
        <StyledText>
          Szymkowiak Dawid <br /> Junior Frontend Developer
        </StyledText>
        <Button1
          onClick={handleClick}
          onAnimationEnd={onAnimationEnd}
          animate={state.animateMeetMe}
        >
          Poznaj mnie
        </Button1>
      </StyledHello>
      <Game />
    </StyledWrapper>
  );
}

export default Welcome;
