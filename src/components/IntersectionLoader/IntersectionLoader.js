import React, { useEffect, useRef } from 'react';
import { StyledWrapper } from './IntersectionLoader.style';

const config = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3,
};

function IntersectionLoader({ loadMore }) {
  const loaderRef = useRef();
  const observer = useRef(null);

  function onChange([change]) {
    if (change.intersectionRatio > 0) loadMore();
  }

  useEffect(() => {
    observer.current = new IntersectionObserver(onChange, config);
    observer.current.observe(loaderRef.current);
    return () => observer.current.disconnect();
  }, []);

  return <StyledWrapper ref={loaderRef} />;
}

export default IntersectionLoader;
