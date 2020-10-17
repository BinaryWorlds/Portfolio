import React from 'react';
import {
  StyledWrapper,
  StyledHello,
  StyledImage,
  StyledText,
} from './Welcome.style';
import Button1 from '../../components/Button1/Button1';
import Game from '../../components/Game/Game';

function Welcome() {
  return (
    <StyledWrapper>
      <StyledHello>
        <StyledImage />
        <StyledText>
          Szymkowiak Dawid <br /> Junior Frontend Developer
        </StyledText>
        <Button1>Poznaj mnie</Button1>
      </StyledHello>
      <Game />
    </StyledWrapper>
  );
}

export default Welcome;
