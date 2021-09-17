import ReactGA from 'react-ga';
import { useSelector } from 'react-redux';

function useEventGA() {
  const { isCookiesAllowed } = useSelector((state) => state.app);

  const handleEvent = (event) => {
    if (isCookiesAllowed) ReactGA.event(event);
  };

  return [handleEvent];
}

export default useEventGA;
