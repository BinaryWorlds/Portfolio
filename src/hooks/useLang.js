import { useStore } from '../globalState/store';

function useLang() {
  const {
    state: { lang },
  } = useStore();

  return { lang };
}

export default useLang;
