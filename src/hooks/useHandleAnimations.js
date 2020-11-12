import { useStore } from '../globalState/store';
import { SET_PAGE_UNMOUNTED } from '../globalState/actionTypes';

function useUnmountAnimations() {
  const {
    state: { isPageUnmounted, lang },
    dispatch,
  } = useStore();

  const setUnmounted = () => {
    if (!isPageUnmounted) dispatch({ type: SET_PAGE_UNMOUNTED });
  };

  return { isPageUnmounted, setUnmounted, lang };
}

export default useUnmountAnimations;
