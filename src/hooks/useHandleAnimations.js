import { useStore } from '../globalState/store';
import { SET_PAGE_UNMOUNTED } from '../globalState/actionTypes';

function useHandleAnimations() {
  const {
    state: { isPageMounted, lang },
    dispatch,
  } = useStore();

  const handleUnmount = () => {
    if (isPageMounted) dispatch({ type: SET_PAGE_UNMOUNTED });
  };

  return { isPageMounted, handleUnmount, lang };
}

export default useHandleAnimations;
