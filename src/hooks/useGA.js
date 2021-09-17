import { useEffect, useRef } from 'react';
import ReactGA from 'react-ga';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { disableGA } from '../utils/disableGA';

const delayTime = 250;

function useGA() {
  const { isCookiesAllowed } = useSelector((state) => state.app);
  const location = useLocation();

  const timerId = useRef();
  const lastPath = useRef();

  const setTimerId = (id) => {
    clearTimeout(timerId.current);
    timerId.current = id;
  };

  const updatePath = (path) => {
    const timerIdTask = setTimeout(() => {
      setTimerId(null);
      if (path === lastPath.current) return;
      lastPath.current = path;
      ReactGA.pageview(path);
    }, delayTime);

    setTimerId(timerIdTask);
  };

  useEffect(() => {
    disableGA(!isCookiesAllowed);
    if (!isCookiesAllowed) return;

    ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
    ReactGA.set({ anonymizeIp: true });
  }, [isCookiesAllowed]);

  useEffect(() => {
    if (isCookiesAllowed) updatePath(location.pathname);

    return () => clearTimeout(timerId.current);
  }, [isCookiesAllowed, location]);
}

export default useGA;
