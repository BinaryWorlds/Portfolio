import React from 'react';
import Project from './Project/Project';
import landingPage from '../assets/images/landingPage';

const data = {
  title: 'Landing Page',
  image: landingPage,
  alt: 'landing page',
  label: 'landingPage',
  live: 'https://biuro-plus.com',
  description: [
    `Wizytówka biura rachunkowego.`,
    `Lekka strona, której mockup przygotowałem w Figmie.`,
    `Skupiłem się na ułatwieniu kontaktu użytkownika z biurem. Dzięki PWA pracownicy mają możliwość łatwego udostępnienia cyfowej wizytówki w formie kodu QR. W widoku mobilnym, skrót do sekcji kontakt jest cały czas pod ręką.`,
    `Strona jest zgodna z Rodo - zanonimizowana analityka google aktywuje się po zaakceptowaniu wszystkich cookies.`,
    `Ponieważ jest to aplikacja SPA, niezbędne było wykorzystanie Intersection Observer w celu śledzenia aktywej sekcji. Zaimplementowałem tą funkcjonalność bez dodatkowych paczek.`,
  ],
  techs: [
    `Technologie i narzędzia wykorzystane w projekcie:`,
    `React`,
    `React Hooks`,
    `Redux`,
    `Styled Components`,
    `Google Analytics`,
    `Service Worker`,
    `Eslint`,
    `Prettier`,
  ],
};

function LandingPage() {
  return <Project data={data} />;
}

export default LandingPage;
