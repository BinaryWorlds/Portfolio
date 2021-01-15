import React, { useState, useEffect, useRef } from 'react';
import { StyledWrapper } from './IntersectionLoader.style';

const hideLoaderTime = 250;

const config = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3,
};

function IntersectionLoader({ loadMore }) {
  const [isVisible, setIsVisible] = useState(true);

  const loaderRef = useRef();
  const observer = useRef(null);
  const timerHide = useRef(null);

  const hideLoader = () => {
    setIsVisible(false);

    timerHide.current = setTimeout(() => {
      timerHide.current = null;
      setIsVisible(true);
    }, hideLoaderTime);
  };

  function onChange([change]) {
    if (change.intersectionRatio > 0) {
      loadMore();
      hideLoader();
    }
  }

  useEffect(() => {
    if ('IntersectionObserver' in window) {
      observer.current = new IntersectionObserver(onChange, config);
      observer.current.observe(loaderRef.current);
    } else loadMore(true);

    return () => {
      if ('IntersectionObserver' in window) {
        observer.current.disconnect();
        clearTimeout(timerHide.current);
      }
    };
  }, []);

  return (
    <StyledWrapper
      id="intersectionLoader"
      ref={loaderRef}
      visible={isVisible}
    />
  );
}

export default IntersectionLoader;
