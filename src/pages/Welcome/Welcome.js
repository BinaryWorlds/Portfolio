import React from 'react';
import { StyledImage, StyledHello, StyledWrapper } from './Welcome.style';
import Button1 from '../../components/Button1/Button1';
import Game from '../../components/Game/Game';

function Welcome() {
  return (
    <>
      <StyledWrapper>
        <StyledHello>
          <StyledImage />
          Szymkowiak Dawid <br /> Junior Frontend Developer
          <Button1>Poznaj mnie</Button1>
        </StyledHello>
        <Game />
      </StyledWrapper>
    </>
  );
}

export default Welcome;
