import React, { useState, useEffect, useRef } from 'react';
import { StyledInfo, StyledButton, StyledPolicy } from './CookiesInfo.style';
import useLang from '../../hooks/useLang';
import { infoTxt } from './CookiesInfo.text';

const wakeUpDelay = 2500;

function CookiesInfo() {
  const [isShow, setIsShow] = useState(false);
  const { lang } = useLang();
  const timerId = useRef();

  useEffect(() => {
    const isConfirmed = localStorage.getItem('isConfirmed-devIsMe');

    if (!isConfirmed) {
      timerId.current = setTimeout(() => {
        setIsShow(true);
      }, wakeUpDelay);
    }

    return () => clearInterval(timerId.current);
  }, []);

  const handleClick = () => {
    localStorage.setItem('isConfirmed-devIsMe', true);
    setIsShow(false);
  };

  return (
    <StyledInfo show={isShow}>
      <p>
        {infoTxt[lang][0]}
        <StyledPolicy
          href={`${process.env.PUBLIC_URL}/privacyPolicy.html`}
          target="_blank"
          rel="noreferrer"
        >
          {infoTxt[lang][1]}
        </StyledPolicy>
        {infoTxt[lang][2]}
      </p>
      <StyledButton onClick={handleClick}>OK</StyledButton>
    </StyledInfo>
  );
}

export default CookiesInfo;
