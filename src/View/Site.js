import React from 'react';
import * as S from './Site.style';
import Welcome from '../sections/Welcome/Welcome';
import Projects from '../sections/Projects/Projects';
import AboutMe from '../sections/AboutMe/AboutMe';
import Contact from '../sections/Contact/Contact';
import Footer from '../sections/Footer/Footer';

import Header from '../components/Header/Header';

function Site() {
  return (
    <S.Wrapper>
      <Header />
      <Welcome />
      <Projects />
      <AboutMe />
      <Contact />
      <Footer />
    </S.Wrapper>
  );
}

export default Site;
