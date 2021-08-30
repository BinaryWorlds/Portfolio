import React from 'react';
import Project from './Project/Project';

const data = {
  title: 'Mobilna aplikacja pogodowa',
  image: ``,
  live: 'https://binaryworlds.github.io/WeatherApp/',
  github: 'https://github.com/BinaryWorlds/WeatherApp',
  description: [
    `Moim celem było zapewnienie następującej funkcjonalności:`,
    `edycja listy miast`,
    `zapamiętywanie ww. listy podczas kolejnego uruchomienia`,
    `ograniczenie zapytań do api`,
    `detekcja gestów ułatwiających nawigację - bez dodatkowych bibliotek`,
    `lokalizacja użytkownika`,
    `podpowiedzi wyszukiwania`,
  ],
  techs: [
    `Technologie i narzędzia wykorzystane w projekcie:`,
    `React`,
    `React Hooks`,
    `Redux`,
    `Styled Components`,
    `Service Worker`,
    `Eslint`,
    `Prettier`,
  ],
};

function Weather() {
  return <Project data={data} />;
}

export default Weather;
