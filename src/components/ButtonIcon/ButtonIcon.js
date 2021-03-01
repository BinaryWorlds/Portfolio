import React from 'react';
import ReactGA from 'react-ga';

import * as S from './ButtonIcon.style';

function ButtonIcon({ iconSrc, link, size, ariaLabel }) {
  const handleClick = () => {
    ReactGA.event({
      category: 'clickButton',
      action: ariaLabel,
    });
  };
  return (
    <S.Button
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
      size={size}
      onClick={handleClick}
    >
      <S.Icon iconSrc={iconSrc} />
    </S.Button>
  );
}

export default ButtonIcon;
