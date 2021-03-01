import React from 'react';
import * as S from './ButtonFullScreen.style';

function ButtonFullScreen({ className, onClick, isFullScreen }) {
  const fragments = ['fr1', 'fr2', 'fr3', 'fr4'].map((el, index) => (
    <S.Fragment key={el} index={index} full={isFullScreen} />
  ));

  return (
    <S.Button className={className} onClick={onClick} aria-label="FullScreen">
      {fragments}
    </S.Button>
  );
}

export default ButtonFullScreen;
