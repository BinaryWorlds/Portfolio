import { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';

const showingTime = 2000;

function useHint(tresholdOn = 1) {
  const [counter, setCounter] = useState(0);
  const [isHintShow, setIsHintShow] = useState(false);
  const [isOff, setIsOff] = useState(false);

  const timerId = useRef();

  const handleHint = () => {
    if (isOff || isHintShow) return;
    setCounter(counter + 1);
  };

  const hideHint = () => setIsOff(true);

  useEffect(() => {
    const showHint = !isOff && counter >= tresholdOn;
    setIsHintShow(showHint);

    if (isOff) clearTimeout(timerId.current);
    else if (showHint)
      timerId.current = setTimeout(() => {
        setIsHintShow(false);
      }, showingTime);

    return () => clearTimeout(timerId.current);
  }, [counter, isOff]);

  return { isHintShow, handleHint, hideHint };
}

export default useHint;

export const StyledHint = styled.div`
  z-index: 201;
  position: absolute;
  bottom: -150%;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 7%;
  white-space: nowrap;

  font-size: ${({ theme }) => theme.fonts.size.s};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};

  opacity: 0;
  visibility: 'hidden';

  transition: visibility 0s linear 500ms, opacity 500ms;

  ${({ isHintShow }) =>
    isHintShow &&
    css`
      opacity: 1;
      visibility: 'visible';
    `}
`;
