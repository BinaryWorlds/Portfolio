import React from 'react';
import Project from './Project/Project';
import weather from '../assets/images/weather';

const data = {
  title: 'Mobilna aplikacja pogodowa',
  image: weather,
  alt: 'weather app',
  label: 'weather',
  live: 'https://binaryworlds.github.io/WeatherApp/',
  github: 'https://github.com/BinaryWorlds/WeatherApp',
  list: [
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
