import React from 'react';
import pageStructure from '../../pages/pageStructure';
import { StyledWrapper } from './Mobile.style';

const pages = pageStructure.map((item, index) => {
  if (index > 4 && index < 8) return null;
  return <StyledWrapper key={item.key}>{item.page}</StyledWrapper>;
});

function Mobile() {
  return <>{pages}</>;
}

export default Mobile;
