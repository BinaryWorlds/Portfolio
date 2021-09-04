import React from 'react';

import Welcome from '../../sections/Welcome/Welcome';
import Suspense from '../../components/Suspense/Suspense';
import Footer from '../../sections/Footer/Footer';

const Projects = React.lazy(() => import('../../sections/Projects/Projects'));
const AboutMe = React.lazy(() => import('../../sections/AboutMe/AboutMe'));
const Contact = React.lazy(() => import('../../sections/Contact/Contact'));

function Home() {
  const lazy = (children) => <Suspense>{children}</Suspense>;

  return (
    <>
      <Welcome />
      {lazy(<Projects />)}
      {lazy(<AboutMe />)}
      {lazy(<Contact />)}
      <Footer />
    </>
  );
}

export default Home;
