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

const pageStructure = [
  { key: 0, section: 0, page: <Welcome /> },
  { key: 1, section: 1, page: <AboutMe /> },
  { key: 2, section: 2, page: <Now /> },
  { key: 3, section: 2, page: <Portfolio /> },
  { key: 4, section: 2, page: <Course /> },
  { key: 5, section: 2, page: <LandingPage /> },
  { key: 6, section: 2, page: <WeatherApp /> },
  { key: 7, section: 2, page: <BudgetApp /> },
  { key: 8, section: 2, page: <MyProduct /> },
  { key: 9, section: 3, page: <Contact /> },
];

export default pageStructure;

export const lastPage = pageStructure.length - 1;
