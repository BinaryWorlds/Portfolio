import React from 'react';
import { StyledButton } from './Button2.style';

function Button2({ onClick, text }) {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
}

export default Button2;
