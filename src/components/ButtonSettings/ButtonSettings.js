import React from 'react';
import { StyledButton } from './ButtonSettings.style';

function ButtonSettings({ className, children, onClick, isOpen }) {
  return (
    <StyledButton
      className={className}
      aria-label="Settings"
      onClick={onClick}
      isOpen={isOpen}
    >
      {children}
    </StyledButton>
  );
}

export default ButtonSettings;
