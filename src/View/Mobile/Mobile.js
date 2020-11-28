import React from 'react';
import Layout from '../../layout/layout';
import pageStructure from '../../pages/pageStructure';
import { StyledWrapper } from './Mobile.style';

const pages = pageStructure.map((item, index) => {
  if (index > 4 && index < 8) return null;
  return <React.Fragment key={item.key}>{item.page}</React.Fragment>;
});

function Mobile() {
  return (
    <Layout extend={{ isUnmounted: true, isMobile: true }}>
      <StyledWrapper>{pages}</StyledWrapper>
    </Layout>
  );
}

export default Mobile;
