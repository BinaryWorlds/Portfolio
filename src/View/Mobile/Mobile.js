import React, { useState, useRef, useEffect } from 'react';
import Layout from '../../layout/layout';
import pageStructure, { lastPage } from '../../pages/pageStructure';
import { StyledWrapper } from './Mobile.style';
import IntersectionLoader from '../../components/IntersectionLoader/IntersectionLoader';

function Mobile() {
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

  const displayLoader =
    loadCounter < lastPage ? <IntersectionLoader loadMore={loadMore} /> : null;

  return (
    <Layout extend={{ isUnmounted: true, isMobile: true }}>
      <StyledWrapper>{loadPages(loadCounter)}</StyledWrapper>
      {displayLoader}
    </Layout>
  );
}

export default Mobile;
