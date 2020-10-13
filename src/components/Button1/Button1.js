import React from 'react';
import {
  StyledButton,
  StyledCircle,
  StyledIcon,
  StyledText,
} from './Button1.style';

function Button1() {
  return (
    <>
      <StyledButton>
        <StyledCircle className="button1-circle">
          <StyledIcon className="button1-icon" />
        </StyledCircle>
        <StyledText className="button1-text">Poznaj mnie</StyledText>
      </StyledButton>
    </>
  );
}

export default Button1;
