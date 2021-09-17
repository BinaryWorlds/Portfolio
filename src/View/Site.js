import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from '../components/Header/Header';
import Home from '../pages/Home/Home';
import CookiesInfo from '../components/CookiesInfo/CookiesInfo';

import Suspense from '../components/Suspense/Suspense';
import { projectsLinks } from './siteStructure';
import useGA from '../hooks/useGA';

const FbClear = React.lazy(() => import('../pages/fbClear'));
const Jawbreaker = React.lazy(() => import('../pages/jawbreaker'));
const LandingPage = React.lazy(() => import('../pages/landingPage'));
const Printer = React.lazy(() => import('../pages/printer'));
const Product = React.lazy(() => import('../pages/product'));
const Weather = React.lazy(() => import('../pages/weather'));

const BgAnimation = React.lazy(() => import('../components/BgAnimation/BgAnimation'));

function Site() {
  useGA();

  const { loadMore } = useSelector((state) => state.app);

  return (
    <>
      <Suspense>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path={projectsLinks.fbClear} component={FbClear} />
          <Route exact path={projectsLinks.jawbreaker} component={Jawbreaker} />
          <Route exact path={projectsLinks.landingPage} component={LandingPage} />
          <Route exact path={projectsLinks.printer} component={Printer} />
          <Route exact path={projectsLinks.product} component={Product} />
          <Route exact path={projectsLinks.weather} component={Weather} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
      <Header />
      <CookiesInfo />
      {loadMore && (
        <React.Suspense fallback={<div style={{ position: 'fixed' }} />}>
          <BgAnimation />
        </React.Suspense>
      )}
    </>
  );
}

export default Site;
