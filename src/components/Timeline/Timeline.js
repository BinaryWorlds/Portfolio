import React from 'react';
import { useStore } from '../../globalState/store';
import { StyledWrapper, StyledLine } from './Timeline.style';

function Timeline({ pageId, showTimeline }) {
  const {
    state: { lang },
  } = useStore();

  const nowText = lang === 'pl' ? 'Teraz' : 'Now';
  const dateList = [
    { text: nowText, id: 2 },
    { text: '2020.10', id: 3 },
    { text: '2019.10', id: 4 },
    { text: '2019.09', id: 8 },
  ];
  const list = dateList.map(({ text, id }) => (
    <StyledLine key={text} text={text} active={pageId === id} />
  ));

  return <StyledWrapper showTimeline={showTimeline}>{list}</StyledWrapper>;
}

export default Timeline;
