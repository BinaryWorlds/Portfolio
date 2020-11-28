import { useStore } from '../globalState/store';
import { SET_VIEW } from '../globalState/actionTypes';

function useView() {
  const {
    state: { isMobile },
    dispatch,
  } = useStore();

  const setIsMobile = (check) => {
    if (isMobile !== check) dispatch({ type: SET_VIEW, payload: check });
  };

  return { isMobile, setIsMobile };
}

export default useView;
