import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import * as S from './Site.style';

import Header from '../components/Header/Header';
import Home from '../pages/Home/Home';
import Suspense from '../components/Suspense/Suspense';
import { projectsLinks } from './siteStructure';

const FbClear = React.lazy(() => import('../pages/fbClear'));
const Jawbreaker = React.lazy(() => import('../pages/jawbreaker'));
const LandingPage = React.lazy(() => import('../pages/landingPage'));
const Printer = React.lazy(() => import('../pages/printer'));
const Product = React.lazy(() => import('../pages/product'));
const Weather = React.lazy(() => import('../pages/weather'));

const BgAnimation = React.lazy(() => import('../components/BgAnimation/BgAnimation'));

function Site() {
  return (
    <S.Wrapper>
      <Router>
        <Suspense>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path={projectsLinks.fbClear} component={FbClear} />
            <Route exact path={projectsLinks.jawbreaker} component={Jawbreaker} />
            <Route exact path={projectsLinks.landingPage} component={LandingPage} />
            <Route exact path={projectsLinks.printer} component={Printer} />
            <Route exact path={projectsLinks.product} component={Product} />
            <Route exact path={projectsLinks.weather} component={Weather} />
            <Redirect from="*" to="/" />
          </Switch>
        </Suspense>
        <Header />
        <Suspense>
          <BgAnimation />
        </Suspense>
      </Router>
    </S.Wrapper>
  );
}

export default Site;
