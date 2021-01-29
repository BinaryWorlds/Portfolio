import React from 'react';
import { StyledButton } from './ButtonLoadHidden.style.';
import useLang from '../../hooks/useLang';

function ButtonLoadHidden({ onClick }) {
  const { isPl } = useLang();

  return (
    <StyledButton id="buttonLoadMore" onClick={onClick}>
      {isPl ? 'Pokaż ukrytą treść' : 'Show hidden content'}
    </StyledButton>
  );
}

export default ButtonLoadHidden;
