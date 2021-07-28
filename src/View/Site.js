import React from 'react';
import * as S from './Site.style';
import Welcome from '../sections/Welcome/Welcome';

function Site() {
  return (
    <S.Wrapper>
      <Welcome />
    </S.Wrapper>
  );
}

export default Site;
