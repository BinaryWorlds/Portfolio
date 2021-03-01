import React from 'react';
import * as S from './Button2.style';

function Button2({ onClick, text, link }) {
  return (
    <S.Button href={link} target="_blank" rel="noreferrer" onClick={onClick}>
      {text}
    </S.Button>
  );
}

export default Button2;
