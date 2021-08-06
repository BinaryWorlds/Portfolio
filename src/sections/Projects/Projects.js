import React from 'react';
import * as S from './Projects.style';

import landingPage from '../../assets/thumbnails/landingPage';
import jawbreaker from '../../assets/thumbnails/jawbreaker';
import weather from '../../assets/thumbnails/weather';
import printer from '../../assets/thumbnails/printer';
import fbClear from '../../assets/thumbnails/fbClear';
import product from '../../assets/thumbnails/product';

function Projects() {
  const cards = [
    { name: 'Landing Page', img: landingPage },
    { name: 'Gra Jawbreaker', img: jawbreaker },
    { name: 'Pogoda', img: weather },
    { name: 'Biblioteka drukarki', img: printer },
    { name: 'Facebook Cleaner', img: fbClear },
    { name: 'Wizytówka produktu', img: product },
  ];

  return (
    <S.Wrapper>
      <S.Title>Projekty</S.Title>
      <S.Container>
        {cards.map(({ name, img }) => (
          <S.Box key={name}>
            <S.InnerBox>
              <S.Image image={img} alt={name} />
              <S.BoxTitle>{name}</S.BoxTitle>
            </S.InnerBox>
          </S.Box>
        ))}
      </S.Container>
    </S.Wrapper>
  );
}

export default Projects;
