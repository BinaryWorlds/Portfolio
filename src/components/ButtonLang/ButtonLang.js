import React, { useState } from 'react';
import { StyledButton, StyledWrapper } from './ButtonLang.style';
import { useStore } from '../../globalState/store';
import { SET_LANG } from '../../globalState/actionTypes';

function ButtonLang() {
  const [isPl, setIsPl] = useState(true);
  const { dispatch } = useStore();
  const langToSet = isPl ? 'pl' : 'en';
  const handleClick = () => {
    setIsPl(!isPl);
    dispatch({ type: SET_LANG, payload: langToSet });
  };
  return (
    <StyledWrapper>
      <StyledButton isPl={isPl} onClick={handleClick}>
        EN --- PL
      </StyledButton>
    </StyledWrapper>
  );
}

export default ButtonLang;
