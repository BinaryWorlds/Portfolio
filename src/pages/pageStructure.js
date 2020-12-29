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
].map((item) => ({
  ...item,
  page: <Suspense>{item.page}</Suspense>,
}));

export default pageStructure;

export const lastPage = pageStructure.length - 1;
