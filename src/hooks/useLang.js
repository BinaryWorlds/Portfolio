import { useStore } from '../globalState/store';

function useLang() {
  const {
    state: { lang },
  } = useStore();

  const isPl = lang === 'pl';
  const isEn = lang === 'en';

  return { lang, isPl, isEn };
}

export default useLang;
