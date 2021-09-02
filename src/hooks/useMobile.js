import { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { bp } from '../layout/theme';
import { getWidthEm } from '../utils/getWidthEm';
import { unlockScroll } from '../utils/scroll';
import { updateIsMobile, toggleMenu } from '../store/app/actions';

function useMobile() {
  const dispatch = useDispatch();
  const { isMobile, isMenuOpen } = useSelector((state) => state.app);

  const checkIsMobile = () => {
    const widthEm = getWidthEm();
    const check = bp.md > widthEm;
    if (isMobile === check) return;
    dispatch(updateIsMobile(check));
  };

  useLayoutEffect(() => {
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => {
      window.removeEventListener('resize', checkIsMobile);
      unlockScroll();
    };
  }, []);

  const switchToDesktop = () => {
    if (!isMenuOpen) return;
    dispatch(toggleMenu());
    unlockScroll();
  };

  useLayoutEffect(() => {
    if (isMobile === false) switchToDesktop();
  }, [isMobile, isMenuOpen]);
}

export default useMobile;
