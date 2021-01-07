import React from 'react';
import Suspense from '../components/Suspense/Suspense';
import Welcome from './Welcome/Welcome';

const AboutMe = React.lazy(() => import('./AboutMe/AboutMe'));
const Now = React.lazy(() => import('./Projects/Now/Now'));
const Portfolio = React.lazy(() => import('./Projects/Portfolio/Portfolio'));
const Course = React.lazy(() => import('./Projects/Course/Course'));
const LandingPage = React.lazy(() =>
  import('./Projects/LandingPage/LandingPage'),
);
const WeatherApp = React.lazy(() => import('./Projects/WeatherApp/WeatherApp'));
const BudgetApp = React.lazy(() => import('./Projects/BudgetApp/BudgetApp'));
const MyProduct = React.lazy(() => import('./Projects/MyProduct/MyProduct'));
const Contact = React.lazy(() => import('./Contact/Contact'));

const pageStructure = [
  { section: 0, page: <Welcome /> },
  { section: 1, page: <AboutMe /> },
  { section: 2, page: <Now /> },
  { section: 2, page: <Portfolio /> },
  { section: 2, page: <Course /> },
  { section: 2, page: <LandingPage /> },
  { section: 2, page: <WeatherApp /> },
  { section: 2, page: <BudgetApp /> },
  { section: 2, page: <MyProduct /> },
  { section: 3, page: <Contact /> },
].map((item, index) => {
  if (index === 0)
    return {
      ...item,
      key: index,
    };
  return {
    ...item,
    key: index,
    page: <Suspense>{item.page}</Suspense>,
  };
});

export default pageStructure;

export const lastPage = pageStructure.length - 1;
