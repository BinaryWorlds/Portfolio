import React, { useState, useEffect } from 'react';
import Desktop from './View/Desktop/Desktop';
import Mobile from './View/Mobile/Mobile';

const mobileTreshold = 768;

function App() {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    const check = !!(window.innerWidth < mobileTreshold);
    setIsMobile(check);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <>{isMobile ? <Mobile /> : <Desktop />}</>;
}

export default App;
