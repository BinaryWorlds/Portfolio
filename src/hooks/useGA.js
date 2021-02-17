import { useEffect } from 'react';
import ReactGA from 'react-ga';
import { useStore } from '../globalState/store';

function useGA(page) {
  const {
    state: { isMobile },
  } = useStore();

  useEffect(() => {
    let path = isMobile ? '/mobile/' : '/desktop/';
    path += page;

    ReactGA.pageview(path);
  }, []);
}

export default useGA;
