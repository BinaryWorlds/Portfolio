import React from 'react';
import { StyledButton, StyledIcon } from './ButtonIcon.style';

function ButtonIcon({ iconSrc, link, size, ariaLabel }) {
  return (
    <StyledButton
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
    >
      <StyledIcon size={size} iconSrc={iconSrc} />
    </StyledButton>
  );
}

export default ButtonIcon;
