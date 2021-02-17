import React from 'react';
import ReactGA from 'react-ga';

import { StyledButton, StyledIcon } from './ButtonIcon.style';

function ButtonIcon({ iconSrc, link, size, ariaLabel }) {
  const handleClick = () => {
    ReactGA.event({
      category: 'clickButton',
      action: ariaLabel,
    });
  };
  return (
    <StyledButton
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
      size={size}
      onClick={handleClick}
    >
      <StyledIcon iconSrc={iconSrc} />
    </StyledButton>
  );
}

export default ButtonIcon;
