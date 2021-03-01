import React from 'react';
import * as S from './ButtonSettings.style';

function ButtonSettings({ className, children, onClick, isOpen }) {
  return (
    <S.Button
      className={className}
      aria-label="Settings"
      onClick={onClick}
      isOpen={isOpen}
    >
      {children}
    </S.Button>
  );
}

export default ButtonSettings;
