import React, { useState, useEffect } from 'react';
import useLang from '../../hooks/useLang';
import * as S from './Timeline.style';

function Timeline({ pageId, section }) {
  const { isPl } = useLang();

  const [isVisible, setIsVisible] = useState(false);

  const showTimeline = section === 2 && (pageId < 5 || pageId === 8);

  useEffect(() => {
    if (!isVisible && showTimeline) setIsVisible(true);
  }, [pageId, section]);

  const nowText = isPl ? 'Teraz' : 'Now';
  const dateList = [
    { text: nowText, id: 2 },
    { text: '2020.10', id: 3 },
    { text: '2019.10', id: 4 },
    { text: '2019.09', id: 8 },
  ];
  const list = dateList.map(({ text, id }) => (
    <S.Line key={text} text={text} active={pageId === id} />
  ));

  return (
    <S.Wrapper isVisible={isVisible} showTimeline={showTimeline}>
      {list}
    </S.Wrapper>
  );
}

export default Timeline;
