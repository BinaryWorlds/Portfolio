import React from 'react';
import Project from './Project/Project';
import jawbreaker from '../assets/images/jawbreaker';

const data = {
  title: 'Gra Jawbreaker',
  image: jawbreaker,
  alt: 'jawbreaker game',
  label: 'jawbreaker',
  live: 'https://binaryworlds.github.io/jawbreaker-game/',
  github: 'https://github.com/BinaryWorlds/jawbreaker-game',
  description: [
    `Ponieważ zainteresował mnie konkurs decode-it z pracuj.pl, a jedno z zadań było związane z tą grą, postanowiłem stworzyć jej własną wersję.`,
    `Implementując logikę, skupiłem się na optymalizacji, porównując w benchmarkach wydajność różnych metod operacji na tablicach w JS.`,
  ],
  list: [
    `Zasady:`,
    `usuwaj grupy co najmniej dwóch kul jednego koloru`,
    `kule opadają w dół`,
    `usunięcie kolumny powoduje przesunięcie pozostałych w lewo`,
    `za grupę N kul, otrzymasz N*(N-1) punktów`,
  ],
  techs: [
    `Technologie i narzędzia wykorzystane w projekcie:`,
    `React`,
    `React Hooks`,
    `Redux`,
    `Canvas`,
    `Styled Components`,
    `Service Worker`,
    `Eslint`,
    `Prettier`,
  ],
};

function Jawbreaker() {
  return <Project data={data} />;
}

export default Jawbreaker;
