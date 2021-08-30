import React from 'react';
import Project from './Project/Project';

const data = {
  title: `Biblioteka dla drukarki termicznej`,
  image: ``,
  github: `https://github.com/BinaryWorlds/ThermalPrinter`,
  description: [
    `Język: C++`,
    `Przeznaczenie: Arduino / esp32`,
    `Celem projektu było stworzenie łatwiejsze w obsłudze biblioteki niż popularna Adafruit.
      W trakcie prac opierałem się na dokumentacji technicznej producenta.`,
    `Przewagą jest:`,
    `łatwiejszy start`,
    `automatyczne obliczanie czasu potrzebnego na wydruk, w zależności od aktualnych parametrów`,
    `drukowanie wyśrodkowanych i skalowalnych bitmap`,
    `więcej opcji konfiguracji`,
    `usunięcie popularnych błędów`,
  ],
};

function Printer() {
  return <Project data={data} />;
}

export default Printer;
