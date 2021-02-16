import React, { useLayoutEffect, useEffect } from 'react';
import Mobile from './View/Mobile/Mobile';
import useView from './hooks/useView';
import Suspense from './components/Suspense/Suspense';

const Desktop = React.lazy(() => import('./View/Desktop/Desktop'));

const mobileTreshold = 600;

function App() {
  const { isMobile, setIsMobile } = useView();

  const handleResize = () => {
    const check = !!(
      window.innerWidth < mobileTreshold || window.innerHeight < mobileTreshold
    );
    setIsMobile(check);
  };

  useLayoutEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    alert('Page in build! \nStrona w budowie!');
  }, []);

  const getApp = (view) => {
    if (view === null) return null;
    return view ? <Mobile /> : <Desktop />;
  };

  return <Suspense>{getApp(isMobile)}</Suspense>;
}

export default App;
