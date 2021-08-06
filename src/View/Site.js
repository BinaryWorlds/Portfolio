import React from 'react';
import * as S from './Site.style';
import Welcome from '../sections/Welcome/Welcome';
import Projects from '../sections/Projects/Projects';

import Header from '../components/Header/Header';

function Site() {
  return (
    <S.Wrapper>
      <Header />
      <Welcome />
      <Projects />
    </S.Wrapper>
  );
}

export default Site;
