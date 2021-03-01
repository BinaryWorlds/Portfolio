import React from 'react';
import * as S from './Button1.style';

function Button1({ onClick, onAnimationEnd, animate, text }) {
  return (
    <S.Button
      onClick={onClick}
      animate={animate}
      onAnimationEnd={onAnimationEnd}
    >
      <S.Circle className="button1-circle">
        <S.Icon className="button1-icon" />
      </S.Circle>
      <S.Text className="button1-text">{text}</S.Text>
    </S.Button>
  );
}

export default Button1;
