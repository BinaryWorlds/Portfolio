import React from 'react';
import { StyledButton, StyledWrapper } from './ButtonLang.style';
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
    <StyledWrapper>
      <StyledButton isPl={isPl} onClick={handleClick}>
        EN --- PL
      </StyledButton>
    </StyledWrapper>
  );
}

export default ButtonLang;
