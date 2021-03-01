import React from 'react';
import * as S from './ButtonLoadHidden.style.';
import useLang from '../../hooks/useLang';

function ButtonLoadHidden({ onClick }) {
  const { isPl } = useLang();

  return (
    <S.Button id="buttonLoadMore" onClick={onClick}>
      {isPl ? 'Pokaż ukrytą treść' : 'Show hidden content'}
    </S.Button>
  );
}

export default ButtonLoadHidden;
