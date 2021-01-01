import React, { useState, useRef, useEffect } from 'react';

import pageStructure, { lastPage } from '../../pages/pageStructure';
import IntersectionLoader from '../../components/IntersectionLoader/IntersectionLoader';

export default function useMobileLogic() {
  const [loadCounter, setLoadCounter] = useState(0);

  const passCounter = useRef(loadCounter);

  useEffect(() => {
    passCounter.current = loadCounter;
    return () => (passCounter.current = 0);
  }, [loadCounter]);

  const loadPages = (counter) =>
    pageStructure.map((item, index) => {
      if (index > counter) return null;
      if (index > 4 && index < 8) return null;
      return <React.Fragment key={item.key}>{item.page}</React.Fragment>;
    });

  const loadMore = () => {
    let newVal = passCounter.current + 1;
    if (newVal === 5) newVal = 8;
    setLoadCounter(newVal);
  };

  const goToPage = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView();
      return;
    }
    loadMore(id);
  };

  const displayLoader =
    loadCounter < lastPage ? <IntersectionLoader loadMore={loadMore} /> : null;

  return { loadCounter, loadPages, goToPage, displayLoader };
}
