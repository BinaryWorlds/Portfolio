import { useState, useRef, useLayoutEffect } from 'react';
import { title } from './Portfolio.text';

const typingInterval = 200;

export default function usePortfolioLogic(lang) {
  const [isWritten, setIsWritten] = useState(false);

  const titleRef = useRef('');
  const timerId = useRef();

  const typewriter = () => {
    const textLength = title[lang].length;
    let counter = 0;
    titleRef.current.innerText = '';
    clearInterval(timerId.current);

    timerId.current = setInterval(() => {
      if (counter < textLength && titleRef.current) {
        titleRef.current.innerText += title[lang][counter++];
        if (counter >= textLength) setIsWritten(true);
      } else clearInterval(timerId.current);
    }, typingInterval);
  };

  useLayoutEffect(() => {
    setIsWritten(false);
    typewriter();
  }, [lang]);

  return { isWritten, titleRef };
}
