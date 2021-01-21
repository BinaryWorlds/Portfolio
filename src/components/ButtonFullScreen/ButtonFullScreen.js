import React from 'react';
import { StyledButton, StyledFragment } from './ButtonFullScreen.style';

function ButtonFullScreen({ className, onClick, isFullScreen }) {
  const fragments = ['fr1', 'fr2', 'fr3', 'fr4'].map((el, index) => (
    <StyledFragment key={el} index={index} full={isFullScreen} />
  ));

  return (
    <StyledButton
      className={className}
      onClick={onClick}
      aria-label="FullScreen"
    >
      {fragments}
    </StyledButton>
  );
}

export default ButtonFullScreen;
