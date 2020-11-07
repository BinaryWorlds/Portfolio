import { useState, useEffect } from 'react';
import { useStore } from '../../globalState/store';
import {
  ANIMATE_MEET_ME,
  SET_PAGE,
  SET_PAGE_UNMOUNTED,
} from '../../globalState/actionTypes';
import { lastPage } from '../../pages/pageStructure';
import constrainVal from '../../utils/constrainVal';

export default function useDesktopLogic() {
  const {
    state: { pageId, isPageMounted },
    dispatch,
  } = useStore();
  const [timerIdWheel, setTimerIdWheel] = useState();
  const [lastPageId, setLastPageId] = useState(0);
  const [timerIdForce, setTimerIdForce] = useState();

  function updatePage() {
    if (lastPageId === pageId) return;
    if (isPageMounted === false) {
      setLastPageId(pageId);
      return;
    }
    if (!timerIdForce) {
      // force page update if error or page is without correct animation(time exceeded) //only for dev
      const id = setTimeout(() => {
        dispatch({ type: SET_PAGE_UNMOUNTED });
        setTimerIdForce(null);
      }, 500);
      setTimerIdForce(id);
    }
  }
  useEffect(updatePage, [isPageMounted, pageId]);

  const changePage = (deltaY) => {
    if (pageId === 0) {
      dispatch({ type: ANIMATE_MEET_ME, payload: true });
      return;
    }

    let newPageId = +pageId;
    if (deltaY > 0) {
      if (pageId !== 4) newPageId += 1;
      else newPageId = 8;
    }
    if (deltaY < 0) {
      if (pageId !== 8) newPageId -= 1;
      else newPageId = 4;
    }
    newPageId = constrainVal(newPageId, 0, lastPage);

    dispatch({ type: SET_PAGE, payload: newPageId });
  };

  const handleWheel = (e) => {
    if (e.ctrlKey || (e.deltaY <= 0 && pageId === 0)) return;

    const timerIdTask = setTimeout(() => {
      setTimerIdWheel(null);
    }, 250);

    if (timerIdWheel) clearTimeout(timerIdWheel);
    else changePage(e.deltaY);

    setTimerIdWheel(timerIdTask);
  };

  return { pageId: lastPageId, handleWheel };
}
