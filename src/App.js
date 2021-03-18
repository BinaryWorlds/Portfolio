import React, { useLayoutEffect } from 'react';
import ReactGA from 'react-ga';
import Mobile from './View/Mobile/Mobile';
import useView from './hooks/useView';
import Suspense from './components/Suspense/Suspense';

const Desktop = React.lazy(() => import('./View/Desktop/Desktop'));

const mobileTreshold = 600;

function App() {
  const { isMobile, setIsMobile } = useView(null);

  const handleResize = () => {
    const check = !!(
      window.innerWidth < mobileTreshold || window.innerHeight < mobileTreshold
    );
    setIsMobile(check);
  };

  useLayoutEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
    ReactGA.set({ anonymizeIp: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getApp = (view) => {
    if (view === null) return null;
    return view ? <Mobile /> : <Desktop />;
  };

  return <Suspense>{getApp(isMobile)}</Suspense>;
}

export default App;
