import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { useStore } from '../../globalState/store';
import { ANIMATE_MEET_ME, SET_PAGE } from '../../globalState/actionTypes';
import { lastPage } from '../../pages/pageStructure';
import constrainVal from '../../utils/constrainVal';

export default function useDesktopLogic() {
  const {
    state: { pageId, isPageUnmounted },
    dispatch,
  } = useStore();
  const [lastPageId, setLastPageId] = useState(0);

  function updatePage() {
    if (lastPageId === pageId) return;
    if (isPageUnmounted === true) setLastPageId(pageId);
  }
  useLayoutEffect(updatePage, [isPageUnmounted, pageId, lastPageId]);

  const timerIdWheel = useRef();

  const setTimerIdWheel = (id) => {
    clearTimeout(timerIdWheel.current);
    timerIdWheel.current = id;
  };

  const changePage = (deltaY) => {
    if (pageId === 0) {
      dispatch({ type: ANIMATE_MEET_ME, payload: true });
      return;
    }

    let newPageId = +pageId;
    if (+deltaY > 0) {
      if (pageId !== 4) newPageId += 1;
      else newPageId = 8;
    }
    if (+deltaY < 0) {
      if (pageId !== 8) newPageId -= 1;
      else newPageId = 4;
    }
    newPageId = constrainVal(newPageId, 0, lastPage);

    dispatch({ type: SET_PAGE, payload: newPageId });
  };

  const handleWheel = ({ ctrlKey, deltaY }) => {
    if (
      ctrlKey ||
      (deltaY <= 0 && pageId === 0) ||
      (deltaY >= 0 && pageId === lastPage)
    )
      return;

    const timerIdTask = setTimeout(() => {
      setTimerIdWheel(null);
    }, 250);

    if (!timerIdWheel.current) changePage(deltaY);

    setTimerIdWheel(timerIdTask);
  };

  const handleKey = ({ key }) => {
    if (key === 'ArrowUp' && pageId !== 0) changePage(-100);
    if (key === 'ArrowDown' && pageId !== lastPage) changePage(+100);
  };

  useEffect(() => {
    window.addEventListener('keyup', handleKey);
    return () => window.removeEventListener('keyup', handleKey);
  }, [pageId]);

  return { pageId: lastPageId, handleWheel, isPageUnmounted };
}
