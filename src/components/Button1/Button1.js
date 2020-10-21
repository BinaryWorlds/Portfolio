import React from 'react';
import {
  StyledButton,
  StyledCircle,
  StyledIcon,
  StyledText,
} from './Button1.style';

function Button1({ onClick, onAnimationEnd, animate, text }) {
  return (
    <StyledButton
      onClick={onClick}
      animate={animate}
      onAnimationEnd={onAnimationEnd}
    >
      <StyledCircle className="button1-circle">
        <StyledIcon className="button1-icon" />
      </StyledCircle>
      <StyledText className="button1-text">{text}</StyledText>
    </StyledButton>
  );
}

export default Button1;
