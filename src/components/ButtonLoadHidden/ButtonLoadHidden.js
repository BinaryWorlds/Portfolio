import React from 'react';
import { StyledButton } from './ButtonLoadHidden.style.';
import { useStore } from '../../globalState/store';

function ButtonLoadHidden({ onClick }) {
  const {
    state: { lang },
  } = useStore();

  const isPl = lang === 'pl';

  return (
    <StyledButton id="buttonLoadMore" onClick={onClick}>
      {isPl ? 'Pokaż ukrytą treść' : 'Show hidden content'}
    </StyledButton>
  );
}

export default ButtonLoadHidden;
