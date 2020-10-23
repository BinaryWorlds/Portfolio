import React from 'react';
import { StyledButton, StyledIcon } from './ButtonIcon.style';

function IconButton({ iconSrc, link, size }) {
  return (
    <StyledButton href={link} target="_blank">
      <StyledIcon size={size} iconSrc={iconSrc} />
    </StyledButton>
  );
}
export default IconButton;
