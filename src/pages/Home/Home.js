import React from 'react';
import { useSelector } from 'react-redux';
import { PageWrapper } from '../../ui/PageWrapper';
import Welcome from '../../sections/Welcome/Welcome';
import Suspense from '../../components/Suspense/Suspense';
import Footer from '../../sections/Footer/Footer';

const Projects = React.lazy(() => import('../../sections/Projects/Projects'));
const AboutMe = React.lazy(() => import('../../sections/AboutMe/AboutMe'));
const Contact = React.lazy(() => import('../../sections/Contact/Contact'));

function Home() {
  const { loadMore } = useSelector((state) => state.app);

  const lazy = (children) => <Suspense>{children}</Suspense>;

  return (
    <PageWrapper>
      <Welcome />
      {loadMore && lazy(<Projects />)}
      {loadMore && lazy(<AboutMe />)}
      {loadMore && lazy(<Contact />)}
      <Footer />
    </PageWrapper>
  );
}

export default Home;
