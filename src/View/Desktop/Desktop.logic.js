import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { useStore } from '../../globalState/store';
import {
  ANIMATE_MEET_ME,
  SET_PAGE,
  SET_PAGE_UNMOUNTED,
} from '../../globalState/actionTypes';
import { lastPage } from '../../pages/pageStructure';
import constrainVal from '../../utils/constrainVal';

const lockTime = 550;

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

  const debounceChange = (deltaY) => {
    if ((deltaY < 0 && pageId === 0) || (deltaY > 0 && pageId === lastPage))
      return;

    const timerIdTask = setTimeout(() => {
      setTimerIdWheel(null);
    }, lockTime);

    if (!timerIdWheel.current) changePage(deltaY);

    setTimerIdWheel(timerIdTask);
  };

  const handleWheel = ({ ctrlKey, deltaY }) => {
    if (!ctrlKey) debounceChange(deltaY);
  };

  const handleKey = ({ key }) => {
    if (key === 'ArrowUp' || key === 'PageUp') debounceChange(-100);
    if (key === 'ArrowDown' || key === 'PageDown') debounceChange(+100);
  };

  const readXy = ({
    touches: {
      0: { clientX, clientY },
    },
  }) => ({ clientX, clientY });

  const firstTouch = useRef(null);
  const handleTouchStart = (e) => (firstTouch.current = readXy(e));

  const handleTouchMove = (e) => {
    if (!firstTouch.current) return;
    const { clientX, clientY } = readXy(e);

    const xDiff = firstTouch.current.clientX - clientX;
    const yDiff = firstTouch.current.clientY - clientY;

    const direction = Math.abs(xDiff) > Math.abs(yDiff); // true:left/right; false up/down

    const deltaY =
      (direction && xDiff > 0) || (!direction && yDiff > 0) ? +100 : -100;

    debounceChange(deltaY);

    firstTouch.current = null;
  };

  useEffect(() => {
    window.addEventListener('keyup', handleKey);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('keyup', handleKey);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [pageId]);

  const setUnmounted = () => {
    if (!isPageUnmounted) dispatch({ type: SET_PAGE_UNMOUNTED });
  };

  return { pageId: lastPageId, handleWheel, isPageUnmounted, setUnmounted };
}
