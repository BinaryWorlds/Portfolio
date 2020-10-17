import React from 'react';

import Welcome from './Welcome/Welcome';
import AboutMe from './AboutMe/AboutMe';
import Now from './Projects/Now/Now';
import Portfolio from './Projects/Portfolio/Portfolio';
import Course from './Projects/Course/Course';
import LandingPage from './Projects/LandingPage/LandingPage';
import WeatherApp from './Projects/WeatherApp/WeatherApp';
import BudgetApp from './Projects/BudgetApp/BudgetApp';
import MyProduct from './Projects/MyProduct/MyProduct';
import Contact from './Contact/Contact';

const pageStructure = {
  0: { page: <Welcome />, section: 0 },
  1: { page: <AboutMe />, section: 1 },
  2: { page: <Now />, section: 2 },
  3: { page: <Portfolio />, section: 2 },
  4: { page: <Course />, section: 2 },
  5: { page: <LandingPage />, section: 2 },
  6: { page: <WeatherApp />, section: 2 },
  7: { page: <BudgetApp />, section: 2 },
  8: { page: <MyProduct />, section: 2 },
  9: { page: <Contact />, section: 3 },

  last: 9,
};

export default pageStructure;
