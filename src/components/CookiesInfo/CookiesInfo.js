import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import * as S from './CookiesInfo.style';
import { infoTxt } from './CookiesInfo.text';
import useEventGA from '../../hooks/useEventGA';
import { updateCookiesState } from '../../store/app/actions';

const wakeUpDelay = 2500;

const cookieName = 'isCookiesAllowed-dev-is.me';
const eventProps = { category: 'Navigation', action: 'Show policy', label: 'pop-up' };

function CookiesInfo() {
  const [handleEvent] = useEventGA();
  const dispatch = useDispatch();
  const [isShow, setIsShow] = useState(false);
  const timerId = useRef();

  const handleCookies = (isAllowed) => {
    localStorage.setItem(cookieName, isAllowed);
    setIsShow(false);
    dispatch(updateCookiesState(isAllowed));
  };

  const handleAccept = () => handleCookies(true);

  const handleDecline = () => handleCookies(false);

  const handlePolicy = () => handleEvent(eventProps);

  useEffect(() => {
    let isConfirmed = localStorage.getItem(cookieName);
    isConfirmed = JSON.parse(isConfirmed);

    if (isConfirmed === null || isConfirmed === undefined) {
      timerId.current = setTimeout(() => {
        setIsShow(true);
      }, wakeUpDelay);
    } else dispatch(updateCookiesState(isConfirmed));

    return () => clearInterval(timerId.current);
  }, []);

  return (
    <S.Info show={isShow}>
      <p>
        {infoTxt[0]}
        <S.Policy
          onClick={handlePolicy}
          href={`${process.env.PUBLIC_URL}/privacyPolicy.html`}
          target="_blank"
          rel="noreferrer">
          {infoTxt[1]}
        </S.Policy>
        {infoTxt[2]}
      </p>
      <S.Button onClick={handleAccept}>
        Akceptuję
        <br />
        wszystkie
      </S.Button>
      <S.Button border onClick={handleDecline}>
        Akceptuję
        <br />
        tylko niezbędne
      </S.Button>
    </S.Info>
  );
}

export default CookiesInfo;
