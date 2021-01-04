import React from 'react';
import { StyledButton } from './ButtonLang.style';
import { useStore } from '../../globalState/store';
import { SET_LANG } from '../../globalState/actionTypes';

function ButtonLang() {
  const {
    state: { lang },
    dispatch,
  } = useStore();
  const isPl = lang === 'pl';
  const langToSet = isPl ? 'en' : 'pl';
  const handleClick = () => dispatch({ type: SET_LANG, payload: langToSet });

  return (
    <StyledButton isPl={isPl} onClick={handleClick}>
      EN --- PL
    </StyledButton>
  );
}

export default ButtonLang;
