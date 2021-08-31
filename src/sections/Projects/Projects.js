import React from 'react';
import * as S from './Projects.style';

import landingPage from '../../assets/thumbnails/landingPage';
import jawbreaker from '../../assets/thumbnails/jawbreaker';
import weather from '../../assets/thumbnails/weather';
import printer from '../../assets/thumbnails/printer';
import fbClear from '../../assets/thumbnails/fbClear';
import product from '../../assets/thumbnails/product';

import { projectsLinks, sectionsId } from '../../View/siteStructure';

function Projects() {
  const cards = [
    { name: 'Landing Page', img: landingPage, link: projectsLinks.landingPage },
    { name: 'Gra Jawbreaker', img: jawbreaker, link: projectsLinks.jawbreaker },
    { name: 'Pogoda', img: weather, link: projectsLinks.weather },
    { name: 'Biblioteka drukarki', img: printer, link: projectsLinks.printer },
    { name: 'Facebook Cleaner', img: fbClear, link: projectsLinks.fbClear },
    { name: 'Wizytówka produktu', img: product, link: projectsLinks.product },
  ];

  return (
    <S.Wrapper id={sectionsId.projects}>
      <S.Title>Projekty</S.Title>
      <S.Container>
        {cards.map(({ name, img, link }) => (
          <S.Box key={name}>
            <S.InnerBox to={`${link}/#top`}>
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
