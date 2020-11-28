import React, { useLayoutEffect } from 'react';
import Desktop from './View/Desktop/Desktop';
import Mobile from './View/Mobile/Mobile';
import useView from './hooks/useView';

const mobileTreshold = 768;

function App() {
  const { isMobile, setIsMobile } = useView();

  const handleResize = () => {
    const check = !!(window.innerWidth < mobileTreshold);
    setIsMobile(check);
  };

  useLayoutEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <>{isMobile ? <Mobile /> : <Desktop />}</>;
}

export default App;
