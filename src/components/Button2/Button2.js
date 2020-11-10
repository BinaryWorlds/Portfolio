import React from 'react';
import { StyledButton } from './Button2.style';

function Button2({ onClick, text, link }) {
  return (
    <StyledButton
      href={link}
      target="_blank"
      rel="noreferrer"
      onClick={onClick}
    >
      {text}
    </StyledButton>
  );
}

export default Button2;
