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
  0: { page: <Welcome key={0} />, section: 0 },
  1: { page: <AboutMe key={1} />, section: 1 },
  2: { page: <Now key={2} />, section: 2 },
  3: { page: <Portfolio key={3} />, section: 2 },
  4: { page: <Course key={4} />, section: 2 },
  5: { page: <LandingPage key={5} />, section: 2 },
  6: { page: <WeatherApp key={6} />, section: 2 },
  7: { page: <BudgetApp key={7} />, section: 2 },
  8: { page: <MyProduct key={8} />, section: 2 },
  9: { page: <Contact key={9} />, section: 3 },
};
export default pageStructure;

export const lastPage = pageStructure.length;
