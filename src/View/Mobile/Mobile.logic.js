import React, { useState, useRef, useEffect } from 'react';

import pageStructure, { lastPage } from '../../pages/pageStructure';
import IntersectionLoader from '../../components/IntersectionLoader/IntersectionLoader';
import ButtonLoadHidden from '../../components/ButtonLoadHidden/ButtonLoadHidden';

export default function useMobileLogic() {
  const [loadCounter, setLoadCounter] = useState(0);
  const passCounter = useRef(loadCounter);

  const hiddenNrs = useRef({ from: null, to: null });
  const goToButton = useRef(false);

  const scrollToId = (id) => {
    const target = document.getElementById(id);
    if (target) target.scrollIntoView();

    return !!target;
  };

  useEffect(() => {
    if (goToButton.current) {
      goToButton.current = false;
      scrollToId('buttonLoadMore');
    }

    passCounter.current = loadCounter;
    return () => (passCounter.current = 0);
  }, [loadCounter]);

  const loadHidden = () => {
    setLoadCounter(hiddenNrs.current.from);
    hiddenNrs.current = { from: null, to: null };
  };

  const loadMore = (loadAll) => {
    if (loadAll) {
      setLoadCounter(lastPage);
      return;
    }
    let newVal = passCounter.current + 1;
    if (newVal === 5) newVal = 8;
    setLoadCounter(newVal);
  };

  const goToPage = (id) => {
    const isLoaded = scrollToId(id);
    if (isLoaded) return;

    const nextPageToShow =
      passCounter.current !== 4 ? passCounter.current + 1 : 8;

    if (nextPageToShow === id) {
      scrollToId('intersectionLoader');
      return;
    }

    const { current } = hiddenNrs;

    if (current.from === id) {
      loadHidden();
      return;
    }

    if (!current.from) current.from = nextPageToShow;
    current.to = id - 1;

    goToButton.current = true;
    setLoadCounter(id);
  };

  const loadPages = (counter) =>
    pageStructure.map((item, index) => {
      if (index > counter) return null;
      if (index > 4 && index < 8) return null;

      const { from, to } = hiddenNrs.current;
      if (index === from)
        return <ButtonLoadHidden onClick={loadHidden} key="buttonLoadMore" />;

      if (index > from && index <= to) return null;

      return <React.Fragment key={item.key}>{item.page}</React.Fragment>;
    });

  const displayLoader =
    loadCounter < lastPage ? <IntersectionLoader loadMore={loadMore} /> : null;

  return { loadCounter, loadPages, goToPage, displayLoader };
}
